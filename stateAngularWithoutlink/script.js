app = angular.module('myApp',['ui.router'])

app.config(['$stateProvider',function($stateProvider){
  $stateProvider
    .state('main',{
      url: '/',
      templateUrl:"tpl.main.html",
      controller: 'MainCtrl',
    })
    .state('test',{
      url: '/test',
      templateUrl:"test.html",
    })
    
  }]);
app.controller('MainCtrl', ['$scope', '$http', '$state'
  ,function($scope, $http, $state){
    
    $scope.send = function(){
       $state.go("test");
          }
  }]);  
app.config(['$urlRouterProvider',function($urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  }]);