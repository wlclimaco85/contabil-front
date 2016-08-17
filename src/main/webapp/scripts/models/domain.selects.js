


	//County Object
	qat.model.select.util = function(url,async, request, callback) {
	    var cnaes = "";
	    $.ajax({
	            url: 'main/api/request',
	            async: async,
	            headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	            },
	            data: JSON.stringify({
	                url: url,
	                token : localStorage.getItem("wdAppLS.authToken").replace(/^"(.*)"$/, '$1'),
	                request: request
	            }),
	            error: function() {

	                $('#info').html('<p>An error has occurred</p>');
	            },
	            dataType: 'json',
	            success: function(res) {

	                if (res.operationSuccess == true) {
	                    if (callback == null){

		                } else{
		                    callback(res);
		            	}
	            	}

	        },
	        type: 'POST'
	    });
	};
