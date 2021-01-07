'use strict';

angular.module('hrefApp', [
  'ui.router'
])
  .config(['$stateProvider',
    function($stateProvider) {

         $stateProvider.
            state('tabs', {
                url: '/tab',
                abstract: true,
                templateUrl:"first.html", 
                controller: 'ParentController'
            })
            .state('tabs.home', {
                url: '/home',
                templateUrl:"first.html", 
                controller: 'ChildController'
            })
            .state('tabs.home.detail', {
                url: '/{id:[0-9]{1,4}}',
                templateUrl:"first.html", 
                controller: 'ChildController'
            })
            .state('tabs.home.detail.edit', {
                url: '^/edit/{id:[0-9]{1,4}}',
                templateUrl:"first.html", 
                controller: 'ChildController'
            });
            ;

    }
  ])
  .controller('ParentController', function($scope, $state, $stateParams) {
    $scope.state = $state.href($state.current.name);
  })
  .controller('ChildController', function($scope, $state, $stateParams) {
    
    $scope.state = $state.href($state.current.name);
  })

.config(['$urlRouterProvider',
  function($urlRouterProvider) {

    $urlRouterProvider .otherwise("/tab/home");
  }
]);
