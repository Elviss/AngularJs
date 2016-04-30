pessoas
    .controller('PessoasCtrl',
        ['$scope', 'PessoasSrv', '$location',
            function($scope, PessoasSrv, $location) {

                $scope.load = function() {
                    $scope.registros = PessoasSrv.query();
                };

                $scope.clear = function() {
                    $scope.item = "";
                };

                $scope.add = function(item) {
                    $scope.result = PessoasSrv.save(
                        {},
                        $jQuery.param(item),
                        function(data, status, headers, config) {
                            $location.path('/');
                        },
                        function(data, status, headers, config) {
                            alert("Ocorreu um erro: "+data.message[0]);
                        }
                    );
                    $scope.item = item;
                };

            }
        ]
    );