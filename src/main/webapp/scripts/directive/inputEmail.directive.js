(function() {
    'use strict';

    var commonAuth = angular.module('inputactions', []);

    commonAuth.directive('inputactions', inputaction);

    function inputaction($window) {
debugger
        var directive = {
            restrict: "E",
            templateUrl: "views/util/apps/inputaction-template.html",
            //require: 'ngModel',
            controller: inputactionController,
            scope: {
                confirmAction: '=',
                model: '=',
                propertyName: '='
            },
            link: fnLink
        };


        return directive;
    }

    inputactionController.$inject = ['$scope', '$timeout'];

    function inputactionController($scope, $timeout) {
        var showTime = 200;
        var viewModeTimer;

        $scope.value = $scope.model[$scope.propertyName];
        $scope.newValue = $scope.model[$scope.propertyName];

        $scope.isViewMode = true;
        $scope.isEditMode = false;
        $scope.isControlMode = false;

        $scope.performAction = function(newValue){
            if (!newValue || !$scope.confirmAction){
                return;
            }


            var oNewModel = angular.extend({}, $scope.model);

            oNewModel[$scope.propertyName] = newValue;

            $scope.confirmAction(oNewModel);

            $scope.disableControl();
            $scope.disableEditMode();
            $scope.enableViewMode();

            return oNewModel;
        }



        $scope.disableViewMode = function(){
            $scope.isViewMode = false;
        }
        $scope.enableViewMode = function(){
            $scope.isViewMode = true;
        }
        $scope.enableControl = function(){
            $scope.isControlMode = true;
        }
        $scope.disableControl = function(){
            $scope.isControlMode = false;
        }
        $scope.enableEditMode = function(){
            $scope.isEditMode = true;
        }
        $scope.disableEditMode = function(){
            $scope.isEditMode = false;
        }



        $scope.onOverViewMode = function(){
            viewModeTimer = $timeout(function() {

                if($scope.elem.is(':hover')){
                    $scope.isViewMode = false;
                    $scope.isControlMode = true;
                }
            }, showTime);

        }
    }

    fnLink.$inject = ['scope', 'elem', 'attr', 'ngModel'];
    function fnLink(scope, elem, attr, ngModel){
        scope.elem = elem;
    }
}).call(this);