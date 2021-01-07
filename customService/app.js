var app = angular.module('plunker', []);

app.service('CalculatorService', function(){
  this.square = function(a) {return a*a; };
});
app.controller('MainCtrl', function($scope, CalculatorService) {
  $scope.squarer = function(number){
    $scope.answer = CalculatorService.square(number);
  };
});