


	//County Object
	qat.model.select.util = function(url,async, request, callback) {
	    var cnaes = "";
	    $.ajax({
	            url: 'main/api/anonimo',
	            async: async,
	            headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	            },
	            data: JSON.stringify({
	                url: url,
	                request: request
	            }),
	            error: function() {

	                $('#info').html('<p>An error has occurred</p>');
	            },
	            dataType: 'json',
	            success: function(res) {

	                if (res.operationSuccess == true) {
	                    if (callback != null){

		                } else{
		                    callback();
		            	}
	            	}

	        },
	        type: 'POST'
	    });
	};
