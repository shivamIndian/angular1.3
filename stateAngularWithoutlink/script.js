app = angular.module('myApp',['ui.router',])

app.config(['$stateProvider',function($stateProvider, $stateParams){
  $stateProvider
    .state('main',{
      url: '/',
      templateUrl:"tpl.main.html",
      controller: 'MainCtrl',
    })
    .state('test',{
      url: '/test',
      templateUrl:"test.html", 
      controller:'TestController',
      params: {
        user: ''
      }
    })
    
  }]);

  
  
  
 
  app.controller('MainCtrl', function($scope, $state) {
    $scope.user="";
    $scope.squarer = function(){
      $state.go("test", {user: $scope.user});
      
    };
  });
  app.controller('TestController', function($scope, $stateParams) {
    console.log($stateParams);
    $scope.name = $stateParams.user;
  });
  
  // app.config(['$urlRouterProvider',function($urlRouterProvider){
  //   $urlRouterProvider.otherwise('/');
  // }]);