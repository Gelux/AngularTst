var app = angular.module('collegeApp', []);

app.controller('prfCtrl', function($scope){
    $scope.profesor = profesorData;
    $scope.editando = {};

    $scope.EditarProfesor = function(){

        angular.copy( $scope.profesor, $scope.editando );

    }

});


var profesorData = {
    nombre: "nombre",
    bio: "holaquetal",
    edad: 77,
    foto: "img/icono.png"
}