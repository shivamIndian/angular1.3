app = angular.module('myApp',['ui.router'])

app.config(['$stateProvider',function($stateProvider){
  $stateProvider
    .state('main',{
      url: '/',
      templateUrl:"tpl.main.html",
      controller: 'MainCtrl',
      params: {new_param: null}
    })
    .state('test',{
      url: '/test',
      controller: 'testCtrl',
      templateUrl:"test.html",
    })
    
  }]);
app.controller('MainCtrl', ['$scope', '$http', '$state'
  ,function($scope,$state){
    $scope.user = '';
    $scope.send = function(){
      
    
      
      app.service('Products', function () {      
        this.Items = function() {
          // if we want can get data from database 
           product = { product: '', price: '' }
        }
      });    

       console.log($scope.user); 
      $state.go("test");
          
    }
  }]);
  
  
app.controller('testCtrl', ['$scope', '$state', 'Products',
function ($scope, Products) {
  $scope.Product = Products.Items;
  //some other code 
}]);
app.config(['$urlRouterProvider',function($urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  }]);