(function() {
    angular.module('wdApp.apps.categoria', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CategoriaController', categoriaController);

    function categoriaController($scope, fModels, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory, $filter, toastr) {

        var vm = this;
        $scope.categorias = [];

        SysMgmtData.processPostPageData("main/api/request", {
            url: 'produto/api/categoria/fetchPage',
            token: $rootScope.authToken,
            request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
        }, function(res) {

            if (res.operationSuccess == true) {
                $scope.categorias = res.categoriaList;
                console.log($scope.categorias);
            }
        });

        $scope.checkName = function(data, id) {
            if (id === 2 && data !== 'awesome') {
                return "Username 2 should be `awesome`";
            }
        };

        $scope.fnShow = function(date) {

            return moment(date.modifyDateUTC).format('DD/MM/YYYY');

        }

        $scope.saveUser = function(data, categoria) {
            //$scope.user not updated yet

            var sUrl = "";
            if (categoria.id) {
                sUrl = "produto/api/categoria/update"
            } else {
                sUrl = "produto/api/categoria/insert"
            }
            //angular.extend(data, new qat.model.Categoria(fModels.amont(data, 'INSERT'), 'INSERT', $rootScope.user.user));
            var categoria = {
                id: categoria.id ? categoria.id : null,
                categoria: data.categoria,
                margem: data.margem
            }
            var oObject = new qat.model.Categoria(fModels.amont(categoria, categoria.id ? 'UPDATE' : 'INSERT'), categoria.id ? 'UPDATE' : 'INSERT', $rootScope.user.user);

            SysMgmtData.processPostPageData("main/api/request", {
                url: sUrl,
                token: $rootScope.authToken,
                request: new qat.model.reqCategoria(oObject, true, true)
            }, function(res) {
                toastr.success('Deu Certo seu tanga.', 'Sucess');
                $scope.categorias = res.categoriaList;
            });
        };

        // remove user
        $scope.removeUser = function(categoria) {
            var oObject = new qat.model.Categoria(fModels.amont(categoria, 'DELETE'), 'DELETE', $rootScope.user.user);

            SysMgmtData.processPostPageData("main/api/request", {
                url: "produto/api/categoria/delete",
                token: $rootScope.authToken,
                request: new qat.model.reqCategoria(oObject, true, true)
            }, function(res) {
                toastr.success('Deu Certo seu tanga.', 'Sucess');
                $scope.categorias = res.categoriaList;
            });
        };

        // add user
        $scope.addUser = function() {

            $scope.inserted = new qat.model.Categoria({}, 'INSERT', $rootScope.user.user);
            var test = [];
            test[0] = $scope.inserted

            if ($scope.categorias) {
                for (var x = 0; x < $scope.categorias.length; x++) {
                    test.push($scope.categorias[x]);
                }
            }
            $scope.categorias = [];
            $scope.categorias = test;

        };
    }
})();
(function() {
    angular.module('wdApp.apps.categoria.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CategoriaInsertController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;

            $scope.categoria = {};

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
            var fnCallBack = function(oResponse) {
                //debugger
                console.log(oResponse)
            }
            $scope.saveCategoria = function() {

                var oObject = fModels.amont($scope.categoria, 'INSERT');
                SysMgmtData.processPostPageData("main/api/request", {
                    url: "produto/api/categoria/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqMarca(oObject, true, true)
                }, function(res) {
                    fnCallBack(res);
                });
            };
        });
})();
(function() {
    angular.module('wdApp.apps.categoria.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CategoriaUpdateController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;
            $scope.categoria = {};
            $scope.categoria = $rootScope.categoria;
            console.log($rootScope.categoria)
            $scope.saveCategoria = function() {
                var oObject = fModels.amont($scope.categoria, 'UPDATE');
                SysMgmtData.processPostPageData("main/api/request", {
                    url: "produto/api/categoria/update",
                    token: $rootScope.authToken,
                    request: new qat.model.reqMarca(oObject, true, true)
                }, function(res) {
                    fnCallBack(res);
                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.categoria.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CategoriaDeleteController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;
            $scope.categoria = {};
            $scope.categoria = $rootScope.categoria;
            console.log($rootScope.categoria)
            $scope.saveCategoria = function() {
                var oObject = fModels.amont($scope.categoria, 'UPDATE');
                SysMgmtData.processPostPageData("main/api/request", {
                    url: "produto/api/categoria/delete",
                    token: $rootScope.authToken,
                    request: new qat.model.reqMarca(oObject, true, true)
                }, function(res) {
                    fnCallBack(res);
                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.categoria.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CategoriaViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.categoria = {};
            $scope.categoria = $rootScope.categoria;
            console.log($rootScope.categoria)
            $scope.saveCategoria = function() {
                fPessoa.fnOpenView($scope.categoria, "produto/api/categoria/update/", function() { console.log('aqui') });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.categoria.select', ['ngSanitize', 'ui.select'])
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
        }).controller('CategoriaSelectController', categoriaSelectController);

    function categoriaSelectController($scope, $http, $timeout, $interval, dialogFactory, validationFactory) {
        var vm = this;



        var closee = function() {
            var callbackBanco = function(res) {
                var planos = "";

                if (res.operationSuccess == true) {

                    vm.categoria = res.categoriaList;

                }
            }

            qat.model.select.util("produto/api/categoria/fetchPage", true, new qat.model.planoInquiryRequest(100 / 20, true, JSON.parse(localStorage.getItem("empresa")).id), callbackBanco);
        }
        vm.addCategoria = function() {

            dialogFactory.dialog('views/produto/dialog/dCategoria.html', "CategoriaInsertController", validationFactory.categoria, closee);


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

        vm.categoria = [

        ];

        closee();

        vm.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

        vm.singleDemo = {};
        vm.singleDemo.color = '';
        vm.multipleDemo = {};
        vm.multipleDemo.colors = ['Blue', 'Red'];
        vm.multipleDemo.colors2 = ['Blue', 'Red'];
        vm.multipleDemo.selectedPeople = [vm.categoria[5], vm.categoria[4]];
        vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
        vm.multipleDemo.selectedPeopleWithGroupBy = [vm.categoria[8], vm.categoria[6]];
        vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com', 'wladimir@email.com'];
        vm.multipleDemo.removeSelectIsFalse = [vm.categoria[2], vm.categoria[0]];

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
                vm.categoria.push(item);
            }
        }


    }


})();