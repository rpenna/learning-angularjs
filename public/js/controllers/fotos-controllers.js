angular.module('alurapic').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];

    var promise = $http.get('v1/fotos');
    // MANEIRA 1 DE FAZER REQUISIÇÃO HTTP
    // promise.then(function(retorno) {
    //     $scope.fotos = retorno.data
    // }).catch(function(erro) {
    //     console.log("Erro de requisição HTTP: " + erro);
    // });

    // MANEIRA 2 DE FAZER REQUISIÇÃO HTTP
    promise.success(function(fotos) {
        $scope.fotos = fotos;
    }).error(function(erro) {
        console.log("Erro de requisição HTTP: " + erro);
    });
});