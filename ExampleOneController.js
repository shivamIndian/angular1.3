var myApp = angular.module("myApp", []);
myApp.controller("ExampleOneController", function($scope, NewsService) {
    $scope.newVar = {
      val: ""
    };
    NewsService.newVar = $scope.newVar;
    $scope.news = NewsService.news;
  });


