	/**
	 * Initialize the main namespaces and constants.
	 */
	var qat = {
	    model: {
	        select: {}
	    }

	};


	//County Object
	qat.model.select.cnae = function(async, request, callback) {
	    var cnaes = "";
	    $.ajax({
	            url: 'main/api/anonimo',
	            async: async,
	            headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	            },
	            data: JSON.stringify({
	                url: "fiscal/api/cnae/fetchPage",
	                request: request
	            }),
	            error: function() {

	                $('#info').html('<p>An error has occurred</p>');
	            },
	            dataType: 'json',
	            success: function(res) {

	                if (res.operationSuccess == true) {
	                    if (callback != null)
	                        for (var x = 0; x < res.cnaeList.length; x++) {
	                            cnaes = cnaes + "<option value='" + res.cnaeList[x].id + "'> " + res.cnaeList[x].cnae + "</option>";
	                        }
	                    $('.cnaeList').append(cnaes);

	                    $(".select1").select2({
	                        placeholder: "Select a state",
	                        allowClear: true
	                    });
	                } else
	                    callback();
	            	}
	            }
	        },
	        type: 'POST'
	    });

	return cnaes;
	};
