angular
    .module('pessoas', ['ngRoute'])


    .config(function($routeProvider){

        $routeProvider

            .when('/', {
                templateUrl: 'listar.html'
            })

            .when('/pessoa/adicionar', {
                templateUrl: 'adicionar.html',
                controller: 'CtrlAdicionar'
            })



    })

    .controller('CtrlPessoas', ['$scope', function($scope){

        $scope.pessoas = [
            {'nome': 'Maria', 'cidade': 'São Paulo'},
            {'nome': 'Pedro', 'cidade': 'Salvador'},
            {'nome': 'João', 'cidade': 'Parnaíba'},
            {'nome': 'Cleber', 'cidade': 'Barueri'}
        ];

    }])

    .controller('CtrlAdicionar', ['$scope', function($scope){

        $scope.add = function () {
            $scope.pessoas.push($scope.pessoa);

            $scope.pessoa = "";
            $scope.result = "Registro adicionado com sucesso!";
        }
    }]);