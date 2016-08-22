(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCalls', ['angularModalService']);

	commonAuth.factory('dialogFactory', ['ModalService', function(ModalService){
		return{
				//County Object
				dialog : function(_url,_controller, _callback) {
				    ModalService.showModal({
			            templateUrl: _url,
			            controller: _controller
			        }).then(function(modal) {
			            modal.element.modal();
			            _callback();
			            modal.close.then(function(result) {
			                $scope.message = "You said " + result;
			            });
			        });
				}
			};
	}]);
})();