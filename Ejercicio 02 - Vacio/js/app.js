var app = angular.module('collegeApp', []);

app.controller('prfCtrl', function($scope){
    $scope.profesor = profesorData;
    $scope.editando = {};
    
    $scope.mostrarCaja = false;
    
    $scope.EditarProfesor = function(){

        angular.copy( $scope.profesor, $scope.editando );
        $scope.mostrarCaja = true;

    }

    $scope.GuardarCambios= function(){

        angular.copy( $scope.editando, $scope.profesor );

        $scope.mostrarCaja = false;

    }

    $scope.CancelarCambios= function(){

        $scope.editando = {};

        $scope.mostrarCaja = false;

    }
});


var profesorData = {
    nombre: "nombre N.",
    bio: "holaquetal",
    edad: 77,
    foto: "img/icono.png"
}