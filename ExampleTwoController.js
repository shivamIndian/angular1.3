var myApp = angular.module("myApp", []);
myApp.controller("ExampleTwoController", function($scope, NewsService) {
    $scope.anotherVar = NewsService.newVar;
    $scope.news = NewsService.news;
  });