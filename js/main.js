angular.module('AlumnosModule', []) 

.controller ('alumnosController', ['$scope', function($scope) { 
  // Lista de alumnos
  $scope.alumnos = [
    {nombre:"Juan Martín", curso:"4º ESO"},
    {nombre:"Alicia García", curso:"1º ESO"},
    {nombre:"José Fernandez", curso:"2º ESO"},
    {nombre:"Lucía Herrera", curso:"3º ESO"}
  ];

  // Añade alumno ( modelo )
  $scope.guardaAlumno = function(){
    $scope.alumnos.push({
      nombre:$scope.nuevoAlumno.nombre, 
      curso:$scope.nuevoAlumno.curso
    });
  };

}]);


