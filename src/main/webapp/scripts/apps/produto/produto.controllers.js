(function() {
angular.module('wdApp.apps.produto', ['datatables','angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
.controller('ProdutoController', produtoController);

    function produtoController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory) {
        var vm = this;
        vm.selected = {};
        vm.selectAll = false;
        vm.toggleAll = toggleAll;
        vm.toggleOne = toggleOne;
        vm.status = status;
        vm.message = '';
        vm.edit = edit;
        vm.delete = deleteRow;
        vm.dtInstance = {};
        vm.persons = {};
        $scope.produto = {
            tipoproduto: 2
        };

        var openDialogUpdateCreate = function () {
            bookIndex = 0;
            $('.ProdutoForm')
                .formValidation({
                    framework: 'bootstrap',
                    icon: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        'nome': notEmptyStringMinMaxRegexp,
                        'email': integerNotEmptyValidation,
                        'texto': integerNotEmptyValidation,
                    }
                });
        }

        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };
        var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
            'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';
        var oOptions = DTOptionsBuilder.newOptions()
            .withDOM('frtip')
            .withPaginationType('full_numbers')
            .withOption('createdRow', createdRow)
            .withOption('headerCallback', function(header) {
                if (!vm.headerCompiled) {
                    // Use this headerCompiled field to only compile header once
                    vm.headerCompiled = true;
                    $compile(angular.element(header).contents())($scope);
                }
            })
            .withPaginationType('full_numbers')
            .withColumnFilter({
                aoColumns: [{
                    type: 'number'
                }, {
                    type: 'number',
                }, {
                    type: 'select',
                    values: ['Entrada', 'Saida']
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }]
            })
            .withOption('initComplete', function(settings, json) {
                $('.dt-buttons').find('.dt-button:eq(1)').before(
                    '<select class="form-control col-sm-3 btn btn-primary dropdown-toggle" data-ng-options="t.name for t in vm.types"' +
                    'data-ng-model="vm.object.type" style="height: 32px;margin-left: 8px;margin-right: 6px;width: 200px !important;">' +
                    '<option><a href="#">Ações <span class="badge selected badge-danger main-badge" data-ng-show="{{showCase.countSeleted()}}"</span></a></option>' +
                    '<option><a href="#">Remover Todos <span class="badge selected badge-danger main-badge"  data-ng-show="{{showCase.countSeleted()}}"></span></a></option>' +
                    '</select>'
                )
            })
            .withOption('processing', true)
            .withOption('language', {
                paginate: { // Set up pagination text
                    first: "&laquo;",
                    last: "&raquo;",
                    next: "&rarr;",
                    previous: "&larr;"
                },
                lengthMenu: "_MENU_ records per page"
            })
            .withButtons([{
                extend: "colvis",
                fileName: "Data_Analysis",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {
                    decodeEntities: true
                }
            }, {
                extend: "csvHtml5",
                fileName: "Data_Analysis",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {
                    decodeEntities: true
                }
            }, {
                extend: "pdfHtml5",
                fileName: "Data_Analysis",
                title: "Data Analysis Report",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {
                    decodeEntities: true
                }
            }, {
                extend: "copy",
                fileName: "Data_Analysis",
                title: "Data Analysis Report",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {
                    decodeEntities: true
                }
            }, {
                extend: "print",
                //text: 'Print current page',
                autoPrint: true,
                exportOptions: {
                    columns: ':visible'
                }
            }, {
                extend: "excelHtml5",
                filename: "Data_Analysis",
                title: "Data Analysis Report",
                exportOptions: {
                    columns: ':visible'
                },
                //CharSet: "utf8",
                exportData: {
                    decodeEntities: true
                }
            }, {
                text: 'Novo Plano',
                key: '1',
                action: function(e, dt, node, config) {

                    dialogFactory.dialog('views/produto/dialog/dProduto.html',"ProdutoInsertController",openDialogUpdateCreate);
                   
                }
            }]);
        var aColumns = [
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
        }).withOption('width', '10px'),
        DTColumnBuilder.newColumn('id').withTitle('ID').withOption('width', '10px').notVisible(),
        DTColumnBuilder.newColumn('codigo').withTitle('Codigo').withOption('width', '30px'), 
        DTColumnBuilder.newColumn('produto').withTitle('Nome Produto').withOption('width', '100px'), 
        DTColumnBuilder.newColumn('nCM').withTitle('NCM'),
        DTColumnBuilder.newColumn('codbarra').withTitle('Cod Barra'),
        DTColumnBuilder.newColumn('dataCadastro').withTitle('Data Cadastro').notVisible(),
        DTColumnBuilder.newColumn('estAtual').withTitle('Estoque Atual'),
        DTColumnBuilder.newColumn('status').withTitle('Status'),
        DTColumnBuilder.newColumn('cEST').withTitle('cEST').notVisible(),
        DTColumnBuilder.newColumn('exceçãoIPI').withTitle('exceçãoIPI').notVisible(),
        DTColumnBuilder.newColumn('informAdicionaisParaNFe').withTitle('informAdicionaisParaNFe').notVisible(),
        DTColumnBuilder.newColumn('anotainternas').withTitle('anotainternas').notVisible(),
        DTColumnBuilder.newColumn('unidTributada').withTitle('unidTributada').notVisible(),
        DTColumnBuilder.newColumn('categoria').withTitle('Categoria').notVisible(),
        DTColumnBuilder.newColumn('marca').withTitle('marca').notVisible(),
        DTColumnBuilder.newColumn('pesolíquido').withTitle('pesolíquido').notVisible(),
        DTColumnBuilder.newColumn('pesobruto').withTitle('pesobruto').notVisible(),
        DTColumnBuilder.newColumn('cFOPPadraoNFe').withTitle('cFOPPadraoNFe').notVisible(),
        DTColumnBuilder.newColumn('IcmsSitTributaria').withTitle('IcmsSitTributaria').notVisible(),
        DTColumnBuilder.newColumn('iCMSOrigem').withTitle('iCMSOrigem').notVisible(),
        DTColumnBuilder.newColumn('iPISitTributaria').withTitle('iPISitTributaria').notVisible(),
        DTColumnBuilder.newColumn('classeCigarrosBebidas').withTitle('classeCigarrosBebidas').notVisible(),
        DTColumnBuilder.newColumn('cNPJProdutor').withTitle('cNPJProdutor').notVisible(),
        DTColumnBuilder.newColumn('codControleIPI').withTitle('codControleIPI').notVisible(),
        DTColumnBuilder.newColumn('qtdSeloIPI').withTitle('qtdSeloIPI').notVisible(),
        DTColumnBuilder.newColumn('codEnquadramento').withTitle('codEnquadramento').notVisible(),
        DTColumnBuilder.newColumn('tipoCalculo').withTitle('tipoCalculo').notVisible(),
        DTColumnBuilder.newColumn('aliquotaIPI').withTitle('aliquotaIPI').notVisible(),
        DTColumnBuilder.newColumn('pISSituaTributaria').withTitle('pISSituaTributaria').notVisible(),
        DTColumnBuilder.newColumn('valorUnidtribPIS').withTitle('valorUnidtribPIS').notVisible(),
        DTColumnBuilder.newColumn('tipocalculoSubstTrib').withTitle('tipocalculoSubstTrib').notVisible(),
        DTColumnBuilder.newColumn('valorTribPISST').withTitle('valorTribPISST').notVisible(),
        DTColumnBuilder.newColumn('cOFINSSituatributaria').withTitle('cOFINSSituatributaria').notVisible(),
        DTColumnBuilder.newColumn('valorTribCOFINS').withTitle('valorTribCOFINS').notVisible(),
        DTColumnBuilder.newColumn('tipoCalculoSubstTrib').withTitle('tipoCalculoSubstTrib').notVisible(),
        DTColumnBuilder.newColumn('aliquotaCOFINSST').withTitle('aliquotaCOFINSST').notVisible(),
        DTColumnBuilder.newColumn('estMinimo').withTitle('estMinimo').notVisible(),       
        DTColumnBuilder.newColumn('estMaximo').withTitle('estMaximo').notVisible(),
        DTColumnBuilder.newColumn('margemLucro').withTitle('margemLucro').notVisible(),
        DTColumnBuilder.newColumn('precoVenda').withTitle('precoVenda'),
        DTColumnBuilder.newColumn('precoCusto').withTitle('precoCusto').notVisible(),
        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
        DTColumnBuilder.newColumn('status').withTitle('status'),
        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtml).withOption('width', '100px')
    ];

        function rCallback(nRow, aData) {
            // console.log('row');
        }

        function recompile(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
        }
        var fnDataSRC = function(json) {
            console.log(json)
            json['recordsTotal'] = json.produtoParentList.length
            json['recordsFiltered'] = json.produtoParentList.length
            json['draw'] = 1
            console.log(json)
            return json.produtoParentList;
        }
        Datatablessss.getTable('/produto/api/produtoParent/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, oOptions, aColumns);

        function edit(person) {
            $rootScope.produto = person;
            dialogFactory.dialog('views/produto/dialog/dProduto.html',"ProdutoUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           dialogFactory.dialog('views/produto/dialog/dProduto.html',"ProdutoDeleteController",openDialogUpdateCreate);
        } 

        function createdRow(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        }

        function actionsHtml(data, type, full, meta) {
            vm.persons[data.id] = data;
            return '<button class="btn btn-info" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
                '   <i class="glyphicon glyphicon-save"></i>' +
                '</button>&nbsp;' +
                '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-trash-o"></i>' +
                '</button>';
        }

        function toggleAll(selectAll, selectedItems) {
            for (var id in selectedItems) {
                if (selectedItems.hasOwnProperty(id)) {
                    selectedItems[id] = selectAll;
                }
            }
        }

        function status() {
        }

        function toggleOne(selectedItems) {
            for (var id in selectedItems) {
                if (selectedItems.hasOwnProperty(id)) {
                    if (!selectedItems[id]) {
                        vm.selectAll = false;
                        return;
                    }
                }
            }
            vm.selectAll = true;
        }

        function toggle() {
            $scope.state = !$scope.state;
        };
    }
})();
(function() {
    angular.module('wdApp.apps.produto.insert', ['angucomplete','inputactions'])
        .controller('ProdutoInsertController', function($rootScope, $scope, fModels, SysMgmtData, fProduto,$templateCache, $http) {
            var vm = this;


        $scope.produto = {};
        $scope.tributacao = {};
        $scope.produtoEmpresa = {};


        $scope.produto.produto = "Coca Cola";
        $scope.produto.nCM = "ncm";
        $scope.produto.cdBarras = "cd barras";
        $scope.produto.excTabIPI = "excecaoIPI";
        $scope.produto.cEST = "cEST";

        $scope.produtoEmpresa.dataCreate =  (new Date()).getTime();
        $scope.produtoEmpresa.InfaddNFe = "informAdicionaisParaNFe";
        $scope.produtoEmpresa.AnotInt = "anotainternas";
        $scope.produtoEmpresa.unidTributada = {};
        $scope.produtoEmpresa.unidTributada.id = 1;
        $scope.produtoEmpresa.categoria = {};
        $scope.produtoEmpresa.categoria.id = 1;
        $scope.produtoEmpresa.marca = {};
        $scope.produtoEmpresa.marca.id = 1;
        $scope.produtoEmpresa.codigo = "0004575"
        $scope.produtoEmpresa.pesoliquido = "1.96"
        $scope.produtoEmpresa.pesobruto = "0.09"
        $scope.produtoEmpresa.margemLucro = "5"
        $scope.produtoEmpresa.custoList = [{valor : 0}];
        $scope.produtoEmpresa.custoList[0].valor = 1.99
        $scope.produtoEmpresa.precoList = [{valor : 0}];
        $scope.produtoEmpresa.precoList[0].valor = 2.39
        $scope.produtoEmpresa.estoqueList = [
            {
                estoqueTypeEnumValue : 1,
                 quant : 0,
                 ultimoMov : (new Date()).getTime()
            },
            {
                estoqueTypeEnumValue : 4,
                 quant : 0,
                 ultimoMov : (new Date()).getTime()
            },
            {
                estoqueTypeEnumValue : 3,
                 quant : 0,
                 ultimoMov : (new Date()).getTime()
            }
        ];


        //
        $scope.tributacao.cfop = {}
        $scope.tributacao.cfop.id = 1
        $scope.tributacao.icms = {};
        $scope.tributacao.icms.sitTributaria = {}
        $scope.tributacao.icms.sitTributaria.id = 1;
        $scope.tributacao.icms.origem = {};
        $scope.tributacao.icms.origem.id = 5;
        $scope.tributacao.icms.modalidadeBC = {};
        $scope.tributacao.icms.modalidadeBC.id = 3;
        $scope.tributacao.icms.redBase = 1.99;
        $scope.tributacao.icms.aliqICMS = 0.99;
        $scope.tributacao.icms.motDesoneracao = {};
        $scope.tributacao.icms.motDesoneracao.id = 3;

        $scope.tributacao.ipi ={};
        $scope.tributacao.ipi.sitTributaria ={};
        $scope.tributacao.ipi.sitTributaria.id = "53";
        $scope.tributacao.ipi.classeCigarrosBebidas = "504";
        $scope.tributacao.ipi.cNPJProdutor = "55555555555/0001";
        $scope.tributacao.ipi.codControleIPI = "00054";
        $scope.tributacao.ipi.qtdSeloIPI = "4444";
        $scope.tributacao.ipi.codEnquadramento = {}
        $scope.tributacao.ipi.codEnquadramento.id = 900;
        $scope.tributacao.ipi.tipoCalculo = {}
        $scope.tributacao.ipi.tipoCalculo.id = 1;
        $scope.tributacao.ipi.aliquotaIPI = 1.99;

        $scope.tributacao.pis = {}
        $scope.tributacao.pis.pISSituaTributaria = {}
        $scope.tributacao.pis.pISSituaTributaria.id = 72;
        $scope.tributacao.pis.valorUnidtribPIS = "4454";
        $scope.tributacao.pis.tipocalculoSubstTrib = {};
        $scope.tributacao.pis.tipocalculoSubstTrib.id = 2;
        $scope.tributacao.pis.valorTribPISST = "1.99";

        $scope.tributacao.cofins = {}
        $scope.tributacao.cofins.sitTributaria = {}
        $scope.tributacao.cofins.sitTributaria.id = 63;
        $scope.tributacao.cofins.valorTribCOFINS = "0.99";
        $scope.tributacao.cofins.tipoCalculoSubstTrib ={};
        $scope.tributacao.cofins.tipoCalculoSubstTrib.id = 2;
        $scope.tributacao.cofins.aliquotaCOFINSST = "0.01";
                                
             
        $scope.people = [
            {firstName: "Daryl", surname: "Rowland", twitter: "@darylrowland", pic: "img/daryl.jpeg"},
            {firstName: "Alan", surname: "Partridge", twitter: "@alangpartridge", pic: "img/alanp.jpg"},
            {firstName: "Annie", surname: "Rowland", twitter: "@anklesannie", pic: "img/annie.jpg"}
        ];

        $scope.countries = [
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Aland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'AndorrA', code: 'AD'},
            {name: 'Angola', code: 'AO'},
            {name: 'Anguilla', code: 'AI'},
            {name: 'Antarctica', code: 'AQ'},
            {name: 'Antigua and Barbuda', code: 'AG'},
            {name: 'Argentina', code: 'AR'},
            {name: 'Armenia', code: 'AM'},
            {name: 'Aruba', code: 'AW'},
            {name: 'Australia', code: 'AU'},
            {name: 'Austria', code: 'AT'},
            {name: 'Azerbaijan', code: 'AZ'},
            {name: 'Bahamas', code: 'BS'},
            {name: 'Bahrain', code: 'BH'},
            {name: 'Bangladesh', code: 'BD'},
            {name: 'Barbados', code: 'BB'},
            {name: 'Belarus', code: 'BY'},
            {name: 'Belgium', code: 'BE'},
            {name: 'Belize', code: 'BZ'},
            {name: 'Benin', code: 'BJ'},
            {name: 'Bermuda', code: 'BM'},
            {name: 'Bhutan', code: 'BT'},
            {name: 'Bolivia', code: 'BO'},
            {name: 'Bosnia and Herzegovina', code: 'BA'},
            {name: 'Botswana', code: 'BW'},
            {name: 'Bouvet Island', code: 'BV'},
            {name: 'Brazil', code: 'BR'},
            {name: 'British Indian Ocean Territory', code: 'IO'},
            {name: 'Brunei Darussalam', code: 'BN'},
            {name: 'Bulgaria', code: 'BG'},
            {name: 'Burkina Faso', code: 'BF'},
            {name: 'Burundi', code: 'BI'},
            {name: 'Cambodia', code: 'KH'},
            {name: 'Cameroon', code: 'CM'},
            {name: 'Canada', code: 'CA'},
            {name: 'Cape Verde', code: 'CV'},
            {name: 'Cayman Islands', code: 'KY'},
            {name: 'Central African Republic', code: 'CF'},
            {name: 'Chad', code: 'TD'},
            {name: 'Chile', code: 'CL'},
            {name: 'China', code: 'CN'},
            {name: 'Christmas Island', code: 'CX'},
            {name: 'Cocos (Keeling) Islands', code: 'CC'},
            {name: 'Colombia', code: 'CO'},
            {name: 'Comoros', code: 'KM'},
            {name: 'Congo', code: 'CG'},
            {name: 'Congo, The Democratic Republic of the', code: 'CD'},
            {name: 'Cook Islands', code: 'CK'},
            {name: 'Costa Rica', code: 'CR'},
            {name: 'Cote D\'Ivoire', code: 'CI'},
            {name: 'Croatia', code: 'HR'},
            {name: 'Cuba', code: 'CU'},
            {name: 'Cyprus', code: 'CY'},
            {name: 'Czech Republic', code: 'CZ'},
            {name: 'Denmark', code: 'DK'},
            {name: 'Djibouti', code: 'DJ'},
            {name: 'Dominica', code: 'DM'},
            {name: 'Dominican Republic', code: 'DO'},
            {name: 'Ecuador', code: 'EC'},
            {name: 'Egypt', code: 'EG'},
            {name: 'El Salvador', code: 'SV'},
            {name: 'Equatorial Guinea', code: 'GQ'},
            {name: 'Eritrea', code: 'ER'},
            {name: 'Estonia', code: 'EE'},
            {name: 'Ethiopia', code: 'ET'},
            {name: 'Falkland Islands (Malvinas)', code: 'FK'},
            {name: 'Faroe Islands', code: 'FO'},
            {name: 'Fiji', code: 'FJ'},
            {name: 'Finland', code: 'FI'},
            {name: 'France', code: 'FR'},
            {name: 'French Guiana', code: 'GF'},
            {name: 'French Polynesia', code: 'PF'},
            {name: 'French Southern Territories', code: 'TF'},
            {name: 'Gabon', code: 'GA'},
            {name: 'Gambia', code: 'GM'},
            {name: 'Georgia', code: 'GE'},
            {name: 'Germany', code: 'DE'},
            {name: 'Ghana', code: 'GH'},
            {name: 'Gibraltar', code: 'GI'},
            {name: 'Greece', code: 'GR'},
            {name: 'Greenland', code: 'GL'},
            {name: 'Grenada', code: 'GD'},
            {name: 'Guadeloupe', code: 'GP'},
            {name: 'Guam', code: 'GU'},
            {name: 'Guatemala', code: 'GT'},
            {name: 'Guernsey', code: 'GG'},
            {name: 'Guinea', code: 'GN'},
            {name: 'Guinea-Bissau', code: 'GW'},
            {name: 'Guyana', code: 'GY'},
            {name: 'Haiti', code: 'HT'},
            {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
            {name: 'Holy See (Vatican City State)', code: 'VA'},
            {name: 'Honduras', code: 'HN'},
            {name: 'Hong Kong', code: 'HK'},
            {name: 'Hungary', code: 'HU'},
            {name: 'Iceland', code: 'IS'},
            {name: 'India', code: 'IN'},
            {name: 'Indonesia', code: 'ID'},
            {name: 'Iran, Islamic Republic Of', code: 'IR'},
            {name: 'Iraq', code: 'IQ'},
            {name: 'Ireland', code: 'IE'},
            {name: 'Isle of Man', code: 'IM'},
            {name: 'Israel', code: 'IL'},
            {name: 'Italy', code: 'IT'},
            {name: 'Jamaica', code: 'JM'},
            {name: 'Japan', code: 'JP'},
            {name: 'Jersey', code: 'JE'},
            {name: 'Jordan', code: 'JO'},
            {name: 'Kazakhstan', code: 'KZ'},
            {name: 'Kenya', code: 'KE'},
            {name: 'Kiribati', code: 'KI'},
            {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
            {name: 'Korea, Republic of', code: 'KR'},
            {name: 'Kuwait', code: 'KW'},
            {name: 'Kyrgyzstan', code: 'KG'},
            {name: 'Lao People\'S Democratic Republic', code: 'LA'},
            {name: 'Latvia', code: 'LV'},
            {name: 'Lebanon', code: 'LB'},
            {name: 'Lesotho', code: 'LS'},
            {name: 'Liberia', code: 'LR'},
            {name: 'Libyan Arab Jamahiriya', code: 'LY'},
            {name: 'Liechtenstein', code: 'LI'},
            {name: 'Lithuania', code: 'LT'},
            {name: 'Luxembourg', code: 'LU'},
            {name: 'Macao', code: 'MO'},
            {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
            {name: 'Madagascar', code: 'MG'},
            {name: 'Malawi', code: 'MW'},
            {name: 'Malaysia', code: 'MY'},
            {name: 'Maldives', code: 'MV'},
            {name: 'Mali', code: 'ML'},
            {name: 'Malta', code: 'MT'},
            {name: 'Marshall Islands', code: 'MH'},
            {name: 'Martinique', code: 'MQ'},
            {name: 'Mauritania', code: 'MR'},
            {name: 'Mauritius', code: 'MU'},
            {name: 'Mayotte', code: 'YT'},
            {name: 'Mexico', code: 'MX'},
            {name: 'Micronesia, Federated States of', code: 'FM'},
            {name: 'Moldova, Republic of', code: 'MD'},
            {name: 'Monaco', code: 'MC'},
            {name: 'Mongolia', code: 'MN'},
            {name: 'Montserrat', code: 'MS'},
            {name: 'Morocco', code: 'MA'},
            {name: 'Mozambique', code: 'MZ'},
            {name: 'Myanmar', code: 'MM'},
            {name: 'Namibia', code: 'NA'},
            {name: 'Nauru', code: 'NR'},
            {name: 'Nepal', code: 'NP'},
            {name: 'Netherlands', code: 'NL'},
            {name: 'Netherlands Antilles', code: 'AN'},
            {name: 'New Caledonia', code: 'NC'},
            {name: 'New Zealand', code: 'NZ'},
            {name: 'Nicaragua', code: 'NI'},
            {name: 'Niger', code: 'NE'},
            {name: 'Nigeria', code: 'NG'},
            {name: 'Niue', code: 'NU'},
            {name: 'Norfolk Island', code: 'NF'},
            {name: 'Northern Mariana Islands', code: 'MP'},
            {name: 'Norway', code: 'NO'},
            {name: 'Oman', code: 'OM'},
            {name: 'Pakistan', code: 'PK'},
            {name: 'Palau', code: 'PW'},
            {name: 'Palestinian Territory, Occupied', code: 'PS'},
            {name: 'Panama', code: 'PA'},
            {name: 'Papua New Guinea', code: 'PG'},
            {name: 'Paraguay', code: 'PY'},
            {name: 'Peru', code: 'PE'},
            {name: 'Philippines', code: 'PH'},
            {name: 'Pitcairn', code: 'PN'},
            {name: 'Poland', code: 'PL'},
            {name: 'Portugal', code: 'PT'},
            {name: 'Puerto Rico', code: 'PR'},
            {name: 'Qatar', code: 'QA'},
            {name: 'Reunion', code: 'RE'},
            {name: 'Romania', code: 'RO'},
            {name: 'Russian Federation', code: 'RU'},
            {name: 'RWANDA', code: 'RW'},
            {name: 'Saint Helena', code: 'SH'},
            {name: 'Saint Kitts and Nevis', code: 'KN'},
            {name: 'Saint Lucia', code: 'LC'},
            {name: 'Saint Pierre and Miquelon', code: 'PM'},
            {name: 'Saint Vincent and the Grenadines', code: 'VC'},
            {name: 'Samoa', code: 'WS'},
            {name: 'San Marino', code: 'SM'},
            {name: 'Sao Tome and Principe', code: 'ST'},
            {name: 'Saudi Arabia', code: 'SA'},
            {name: 'Senegal', code: 'SN'},
            {name: 'Serbia and Montenegro', code: 'CS'},
            {name: 'Seychelles', code: 'SC'},
            {name: 'Sierra Leone', code: 'SL'},
            {name: 'Singapore', code: 'SG'},
            {name: 'Slovakia', code: 'SK'},
            {name: 'Slovenia', code: 'SI'},
            {name: 'Solomon Islands', code: 'SB'},
            {name: 'Somalia', code: 'SO'},
            {name: 'South Africa', code: 'ZA'},
            {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
            {name: 'Spain', code: 'ES'},
            {name: 'Sri Lanka', code: 'LK'},
            {name: 'Sudan', code: 'SD'},
            {name: 'Suriname', code: 'SR'},
            {name: 'Svalbard and Jan Mayen', code: 'SJ'},
            {name: 'Swaziland', code: 'SZ'},
            {name: 'Sweden', code: 'SE'},
            {name: 'Switzerland', code: 'CH'},
            {name: 'Syrian Arab Republic', code: 'SY'},
            {name: 'Taiwan, Province of China', code: 'TW'},
            {name: 'Tajikistan', code: 'TJ'},
            {name: 'Tanzania, United Republic of', code: 'TZ'},
            {name: 'Thailand', code: 'TH'},
            {name: 'Timor-Leste', code: 'TL'},
            {name: 'Togo', code: 'TG'},
            {name: 'Tokelau', code: 'TK'},
            {name: 'Tonga', code: 'TO'},
            {name: 'Trinidad and Tobago', code: 'TT'},
            {name: 'Tunisia', code: 'TN'},
            {name: 'Turkey', code: 'TR'},
            {name: 'Turkmenistan', code: 'TM'},
            {name: 'Turks and Caicos Islands', code: 'TC'},
            {name: 'Tuvalu', code: 'TV'},
            {name: 'Uganda', code: 'UG'},
            {name: 'Ukraine', code: 'UA'},
            {name: 'United Arab Emirates', code: 'AE'},
            {name: 'United Kingdom', code: 'GB'},
            {name: 'United States', code: 'US'},
            {name: 'United States Minor Outlying Islands', code: 'UM'},
            {name: 'Uruguay', code: 'UY'},
            {name: 'Uzbekistan', code: 'UZ'},
            {name: 'Vanuatu', code: 'VU'},
            {name: 'Venezuela', code: 'VE'},
            {name: 'Vietnam', code: 'VN'},
            {name: 'Virgin Islands, British', code: 'VG'},
            {name: 'Virgin Islands, U.S.', code: 'VI'},
            {name: 'Wallis and Futuna', code: 'WF'},
            {name: 'Western Sahara', code: 'EH'},
            {name: 'Yemen', code: 'YE'},
            {name: 'Zambia', code: 'ZM'},
            {name: 'Zimbabwe', code: 'ZW'}
        ];


            $scope.updateSlotName = function(updatedModel){
debugger
               /* var tgbMaintenanceRequest = {
                    tgbId: vm.towerSelected,
                    slotName: updatedModel.slotDisplayName,
                    slotId: updatedModel.slotChannelId
                };

                $http({
                    headers: {'Content-Type': 'application/json; charset=utf-8'},
                    url: "bandplan/updateslotname",
                    method: "POST",
                    data: JSON.stringify(tgbMaintenanceRequest)
                }).then(function(oResponse){

                    submitTower($scope.filterForm);
                });*/
            }





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
                debugger
                console.log(oResponse)
            }
            $scope.saveProduto = function() {
                debugger
                fProduto.fnMontaObjeto($scope.produto, $scope.tributacao,$scope.produtoEmpresa, 'INSERT', "produto/api/produtoParent/insert/", fnCallBack);
            };
        });
})();
(function() {
    angular.module('wdApp.apps.produto.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ProdutoUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fProduto) {
            var vm = this;
            $scope.produto = {};
            $scope.produto = $rootScope.produto;
            console.log($rootScope.produto)
            $scope.saveProduto = function() {
                fProduto.fnMontaObjeto($scope.produto, $scope.endereco, 'UPDATE', "site/api/produto/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.produto.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ProdutoDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fProduto) {
            var vm = this;
            $scope.produto = {};
            $scope.produto = $rootScope.produto;
            console.log($rootScope.produto)
            $scope.saveProduto = function() {
                fProduto.fnDelete($scope.produto, "site/api/produto/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.produto.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ProdutoViewController', function($rootScope, $scope, fModels, SysMgmtData, fProduto) {
            var vm = this;
            $scope.produto = {};
            $scope.produto = $rootScope.produto;
            console.log($rootScope.produto)
            $scope.saveProduto = function() {
                fProduto.fnOpenView($scope.produto,"site/api/produto/update/", function(){console.log('aqui')});
            }
        });
})();