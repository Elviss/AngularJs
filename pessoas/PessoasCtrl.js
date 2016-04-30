pessoas
    .controller('PessoasCtrl',
        ['$scope', 'PessoasSrv',
            function($scope, PessoasSrv) {

                $scope.load = function() {
                    $scope.registros = PessoasSrv.query();
                };

            }
        ]
    );