


	//County Object
	qat.model.select.util = function(url,async, request, callback) {
	    var cnaes = "";
	    var sToken = ""
	    if(localStorage.getItem("wdAppLS.authToken") !== null)
	    {
	    	sToken = localStorage.getItem("wdAppLS.authToken").replace(/^"(.*)"$/, '$1');
	    }
	    $.ajax({
	            url: 'main/api/request',
	            async: async,
	            headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	            },
	            data: JSON.stringify({
	                url: url,
	                token : sToken,
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

	//County Object
	qat.model.select.anonimo = function(url,async, request, callback) {
	    var cnaes = "";
	    var sToken = ""
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
	                    if (callback == null){

		                } else{
		                    callback(res);
		            	}
	            	}

	        },
	        type: 'POST'
	    });
	};



