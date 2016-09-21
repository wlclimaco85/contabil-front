angular
	.module("ngClassifieds", ["ngMaterial"])
	.config(function($mdThemingProvider){

		$mdThemingProvider.theme('default') //Changes to the default theme
			.primaryPalette('teal')
			.accentPalette('orange');

	})
	.directive("helloWorld", function() {	//Dont put in scope even tho using scope.message
		return {
			template: "<h1>{{ message }}</h1>"
		}
	}) //angular will convert camelcase to cababcase -> hello-world
	.factory('SysMgmtData', ['$http', 'toastr', 'toastrConfig',  function($http, toastr, toastrConfig){

		toastrConfig.closeButton = true;
	
		//common process error logic
		function process_errors(_resp, _callback){
			toastr.error('AJAX Error calling sysmgmt rest api: ' + _resp.status + " " +  _resp.statusText, 'Error');		
			_resp = "";  
			_callback(_resp);			
		};
		
		//common process business error logic
		function process_business_errors(_resp, _callback){
				//console.log(_resp);
				var msgOut = "Data Processing Error calling sysmgmt rest api: ";
				if (_resp == null){
					//use default message
				}
				else{
					//Make sure return is an array
					if ($.isArray(_resp.messageList)){
						var tmpLength = _resp.messageList.length;
						for (var q = 0; q < (tmpLength); q++){
							msgOut = msgOut + "Severity:" + _resp.messageList[q].messageInfo.severity + ",Level:" + _resp.messageList[q].messageInfo.level +  ",Text:"  + _resp.messageList[q].text + ",traceInfo:"  +  _resp.messageList[q].messageInfo.traceInfo;
						}
					}
				}
				toastr.warning(msgOut, 'Warning');		
				_resp = "";  
				_callback(_resp);			
		};		
		
		//common process data logic		
		function process_data(_resp, _callback)	{
			//console.log(_resp);
			//Successful Return and got some type of object back
			if (_resp != null && (_resp.operationSuccess)){
				//checks for business errors
				if (_resp.messageList.length > 0){	
					process_business_errors(_resp, _callback);	
				}
				else{
					_callback(_resp);
				}
			}
			else{
				process_business_errors(_resp, _callback);								
			};			
		};		
	
		return{
				processPostPageData: function(_url, _req, _callback){
					var res = $http.post(_url, _req);
					res.then(function(response) {
						//process success data						
						process_data(response.data, _callback)						
					}).catch( // Catch
						function(responseError) {
							process_errors(responseError, _callback);;
					});
					
				},
				processGetPageData: function(_url, _callback){
					var res = $http.get(_url);
					res.then(function(response) {
						//process success data						
						process_data(response.data, _callback)						
					}).catch( // Catch
						function(responseError) {
							process_errors(responseError, _callback);;
					});				
				}				
			};
			
}]);



(function() {
	angular.module("ngClassifieds", []).controller('MyController', 
    ['$scope', function($scope,SysMgmtData){


        $scope.forms = [{id : 0,
               typeValue : 0,
               ddd : 'form1',
               numero : "",
               telefoneTypeEnumValue : 0,
               parentId       : 0,
               emprId         : 0,
               processId      : 0,
               tableEnumValue : 0,
               modelAction    : "INSERT",
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()}];
        $scope.count = 0;
        
        $scope.createForm = function(type){
            $scope.forms.push({id : 0,
               typeValue : 0,
               ddd : 'form1' + ($scope.forms.length + 1),
               numero : "",
               telefoneTypeEnum : type,
               parentId       : 0,
               emprId         : 0,
               processId      : 0,
               tableEnumValue : 0,
               modelAction    : "INSERT",
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()});
        };

        $scope.deleteForm = function(formScope){
debugger
        	delete $scope.forms(formScope);
        }
        
        $scope.saveForm = function(formScope){
            alert("Save called for " + formScope.name + ", myInputValue = " + formScope.myInputValue);            
        };
    }]

);

	})();


(function() {
	angular.module("ngClassifiedss", []).controller('site-controller', 
    ['$scope', function($scope,SysMgmtData){


        $scope.forms = [{id : 0,
               typeValue : 0,
               ddd : 'form1',
               numero : "",
               telefoneTypeEnumValue : 0,
               parentId       : 0,
               emprId         : 0,
               processId      : 0,
               tableEnumValue : 0,
               modelAction    : "INSERT",
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()}];
        $scope.count = 0;
        
        $scope.createForm = function(type){
            $scope.forms.push({id : 0,
               typeValue : 0,
               ddd : 'form1' + ($scope.forms.length + 1),
               numero : "",
               telefoneTypeEnum : type,
               parentId       : 0,
               emprId         : 0,
               processId      : 0,
               tableEnumValue : 0,
               modelAction    : "INSERT",
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()});
        };

        $scope.deleteForm = function(formScope){
debugger
        	delete $scope.forms(formScope);
        }
        
        $scope.saveForm = function(formScope){
            alert("Save called for " + formScope.name + ", myInputValue = " + formScope.myInputValue);            
        };
    }]

);

	})();