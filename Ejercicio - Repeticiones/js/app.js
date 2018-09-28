(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
    $scope.listado = ["Jesus", "yo", "tu", "el", "nosotros"];

    $scope.listadoProfesores = {
        profesores:[{
            nombre: "Jesus",
            edad: 123,
            clase: "COSA"
        },{
            nombre: "Jesus2",
            edad: 434,
            clase: "COSA2"
        },{
            nombre: "Jesus3",
            edad: 8765,
            clase: "PDD"
        }
    ]
    }

}]);





})();
