(function() {
    angular.module('wdApp.apps.marca', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('MarcaController', marcaController);

    function marcaController($scope, fModels, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory, $filter, toastr) {
        var vm = this;
        $scope.marcas = [];

        SysMgmtData.processPostPageData("main/api/request", {
            url: 'produto/api/marca/fetchPage',
            token: $rootScope.authToken,
            request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
        }, function(res) {
            if (res.operationSuccess == true) {
                $scope.marcas = res.marcaList;
                console.log($scope.marcas);
            }
        });

        $scope.checkName = function(data, id) {
            if (id === 2 && data !== 'awesome') {
                return "Username 2 should be `awesome`";
            }
        };

        $scope.saveUser = function(data, marca) {
            //$scope.user not updated yet

            var sUrl = "";
            if (marca.id) {
                sUrl = "produto/api/marca/update"
            } else {
                sUrl = "produto/api/marca/insert"
            }
            //angular.extend(data, new qat.model.Marca(fModels.amont(data, 'INSERT'), 'INSERT', $rootScope.user.user));
            var marca = {
                id: marca.id ? marca.id : null,
                marca: data.marca,
                fabricante: data.fabricante,
                emailList: [{ id: (marca.emailList.length > 0 ? marca.emailList[0].id : null), email: data.email }],
                telefoneList: [{ id: (marca.telefoneList.length > 0 ? marca.telefoneList[0].id : null), numero: data.numero }]
            }
            var oObject = new qat.model.Marca(fModels.amont(marca, marca.id ? 'UPDATE' : 'INSERT'), marca.id ? 'UPDATE' : 'INSERT', $rootScope.user.user);

            SysMgmtData.processPostPageData("main/api/request", {
                url: sUrl,
                token: $rootScope.authToken,
                request: new qat.model.reqMarca(oObject, true, true)
            }, function(res) {
                if (res.operationSuccess == true) {
                    toastr.success('Deu Certo seu tanga.', 'Sucess');
                    $scope.marcas = res.marcaList;
                }

            });
        };

        // remove user
        $scope.removeUser = function(marca) {
            var oObject = new qat.model.Marca(fModels.amont(marca, 'DELETE'), 'DELETE', $rootScope.user.user);

            SysMgmtData.processPostPageData("main/api/request", {
                url: "produto/api/marca/delete",
                token: $rootScope.authToken,
                request: new qat.model.reqMarca(oObject, true, true)
            }, function(res) {
                toastr.success('Deu Certo seu tanga.', 'Sucess');
                $scope.marcas = res.marcaList;
            });
        };

        // add user
        $scope.addUser = function() {

            $scope.inserted = new qat.model.Marca({}, 'INSERT', $rootScope.user.user);
            var test = [];
            test[0] = $scope.inserted

            for (var x = 0; x < $scope.marcas.length; x++) {
                test.push($scope.marcas[x]);
            }

            $scope.marcas = [];
            $scope.marcas = test;

        };
    }
})();
(function() {
    angular.module('wdApp.apps.marca.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('MarcaInsertController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa, ModalService, close) {
            var vm = this;
            $scope.marca = {};
            $scope.marca.emailList = [];
            $scope.marca.telefoneList = [];
            $scope.sac = {};
            $scope.email = {};

            $scope.today = function() {
                return $scope.dt = new Date();
            };
            $scope.today();
            $scope.clear = function() {
                return $scope.dt = null;
            };
            $scope.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                return $scope.opened = true;
            };
            $scope.dateOptions = {
                'year-format': "'yy'",
                'starting-day': 0
            };
            $scope.formats = ['MMMM-dd-yyyy', 'MM/dd/yyyy', 'yyyy/MM/dd'];
            $scope.format = $scope.formats[1];
            $scope.close = function(result) {
                //debugger
                close(result, 500); // close, but give 500ms for bootstrap to animate
            };
            var fnCallBack = function(oResponse) {

                console.log(oResponse)
            }
            $scope.saveMarca = function(nfClose) {


                $scope.marca.emailList.push(fModels.amont(qat.model.fnEmails($scope.email.email, $scope.email.id, 1, 'INSERT'), 'INSERT'))
                $scope.marca.telefoneList.push(fModels.amont(qat.model.fnTelefones($scope.sac.numero, $scope.sac.id, 1, 'INSERT'), 'INSERT'))

                var oObject = fModels.amont($scope.marca, 'INSERT');

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "produto/api/marca/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqMarca(oObject, true, true)
                }, function(res) {
                    //debugger
                    fnCallBack(res);
                    $scope.close();
                });
            };
        });
})();
(function() {
    angular.module('wdApp.apps.marca.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('MarcaUpdateController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;
            $scope.marca = {};
            $scope.marca = $rootScope.marca;
            console.log($rootScope.marca)
            $scope.saveMarca = function() {
                $scope.marca.emailList.push(fModels.amont(qat.model.fnEmails($scope.email.email, $scope.email.id, 1, 'UPDATE'), 'UPDATE'))
                $scope.marca.telefoneList.push(fModels.amont(qat.model.fnTelefones($scope.sac.numero, $scope.sac.id, 1, 'UPDATE'), 'UPDATE'))

                var oObject = fModels.amont($scope.marca, 'UPDATE');

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "produto/api/marca/update",
                    token: $rootScope.authToken,
                    request: new qat.model.reqMarca(oObject, true, true)
                }, function(res) {

                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.marca.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('MarcaDeleteController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;
            $scope.marca = {};
            $scope.marca = $rootScope.marca;
            console.log($rootScope.marca)
            $scope.saveMarca = function() {
                $scope.marca.emailList.push(fModels.amont(qat.model.fnEmails($scope.email.email, $scope.email.id, 1, 'DELETE'), 'DELETE'))
                $scope.marca.telefoneList.push(fModels.amont(qat.model.fnTelefones($scope.sac.numero, $scope.sac.id, 1, 'DELETE'), 'DELETE'))

                var oObject = fModels.amont($scope.marca, 'DELETE');

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "produto/api/marca/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqMarca(oObject, true, true)
                }, function(res) {

                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.marca.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('MarcaViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.marca = {};
            $scope.marca = $rootScope.marca;
            console.log($rootScope.marca)
            $scope.saveMarca = function() {
                fPessoa.fnOpenView($scope.marca, "produto/api/marca/update/", function() { console.log('aqui') });
            }
        });
})();

(function() {
    angular.module('wdApp.apps.marca.select', ['ngSanitize', 'ui.select', 'angularModalService'])
        .filter('propsFilter', function() {
            return function(items, props) {
                var out = [];

                if (angular.isArray(items)) {
                    var keys = Object.keys(props);

                    items.forEach(function(item) {
                        var itemMatches = false;

                        for (var i = 0; i < keys.length; i++) {
                            var prop = keys[i];
                            var text = props[prop].toLowerCase();
                            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                                itemMatches = true;
                                break;
                            }
                        }

                        if (itemMatches) {
                            out.push(item);
                        }
                    });
                } else {
                    // Let the output be the input untouched
                    out = items;
                }

                return out;
            };
        }).controller('MarcaSelectController', marcaSelectController);

    function marcaSelectController($scope, $http, $timeout, $interval, dialogFactory) {
        var vm = this;

        var openDialogUpdateCreate = function() {
            bookIndex = 0;
            $('.MarcaForm')
                .formValidation({
                    framework: 'bootstrap',
                    icon: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        'marca': notEmptyStringMinMaxRegexp,
                        'fabricante': integerNotEmptyValidation,
                        'email': integerNotEmptyValidation,
                    }
                });
        }

        var closee = function() {
            var callbackBanco = function(res) {
                var planos = "";

                if (res.operationSuccess == true) {

                    vm.marca = res.marcaList;

                }
            }

            qat.model.select.util("produto/api/marca/fetchPage", true, new qat.model.planoInquiryRequest(100 / 20, true, JSON.parse(localStorage.getItem("empresa")).id), callbackBanco);
        }
        vm.addMarca = function() {

            dialogFactory.dialog('views/produto/dialog/dMarca.html', "MarcaInsertController", openDialogUpdateCreate, closee);


        }

        vm.disabled = undefined;
        vm.searchEnabled = undefined;

        vm.setInputFocus = function() {
            $scope.$broadcast('UiSelectDemo1');
        };

        vm.enable = function() {
            vm.disabled = false;
        };

        vm.disable = function() {
            vm.disabled = true;
        };

        vm.enableSearch = function() {
            vm.searchEnabled = true;
        };

        vm.disableSearch = function() {
            vm.searchEnabled = false;
        };

        vm.clear = function() {
            vm.person.selected = undefined;
            vm.address.selected = undefined;
            vm.country.selected = undefined;
        };

        vm.someGroupFn = function(item) {

            if (item.name[0] >= 'A' && item.name[0] <= 'M')
                return 'From A - M';

            if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                return 'From N - Z';

        };

        vm.firstLetterGroupFn = function(item) {
            return item.name[0];
        };

        vm.reverseOrderFilterFn = function(groups) {
            return groups.reverse();
        };

        vm.personAsync = { selected: "wladimir@email.com" };
        vm.peopleAsync = [];

        $timeout(function() {
            vm.peopleAsync = [

            ];
        }, 3000);

        vm.counter = 0;
        vm.onSelectCallback = function(item, model) {
            vm.counter++;
            vm.eventResult = { item: item, model: model };
        };

        vm.removed = function(item, model) {
            vm.lastRemoved = {
                item: item,
                model: model
            };
        };

        vm.tagTransform = function(newTag) {
            var item = {
                name: newTag,
                email: newTag.toLowerCase() + '@email.com',
                age: 'unknown',
                country: 'unknown'
            };

            return item;
        };

        vm.peopleObj = {

        };

        vm.person = {};

        vm.person.selectedValue = vm.peopleObj[3];
        vm.person.selectedSingle = 'Samantha';
        vm.person.selectedSingleKey = '5';
        // To run the demos with a preselected person object, uncomment the line below.
        //vm.person.selected = vm.person.selectedValue;

        vm.marca = [

        ];

        closee();

        vm.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

        vm.singleDemo = {};
        vm.singleDemo.color = '';
        vm.multipleDemo = {};
        vm.multipleDemo.colors = ['Blue', 'Red'];
        vm.multipleDemo.colors2 = ['Blue', 'Red'];
        vm.multipleDemo.selectedPeople = [vm.marca[5], vm.marca[4]];
        vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
        vm.multipleDemo.selectedPeopleWithGroupBy = [vm.marca[8], vm.marca[6]];
        vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com', 'wladimir@email.com'];
        vm.multipleDemo.removeSelectIsFalse = [vm.marca[2], vm.marca[0]];

        vm.appendToBodyDemo = {
            remainingToggleTime: 0,
            present: true,
            startToggleTimer: function() {
                var scope = vm.appendToBodyDemo;
                var promise = $interval(function() {
                    if (scope.remainingTime < 1000) {
                        $interval.cancel(promise);
                        scope.present = !scope.present;
                        scope.remainingTime = 0;
                    } else {
                        scope.remainingTime -= 1000;
                    }
                }, 1000);
                scope.remainingTime = 3000;
            }
        };

        vm.address = {};
        vm.refreshAddresses = function(address) {
            var params = { address: address, sensor: false };
            return $http.get(
                'http://maps.googleapis.com/maps/api/geocode/json', { params: params }
            ).then(function(response) {
                vm.addresses = response.data.results;
            });
        };

        vm.addPerson = function(item, model) {
            if (item.hasOwnProperty('isTag')) {
                delete item.isTag;
                vm.marca.push(item);
            }
        }


    }


})();