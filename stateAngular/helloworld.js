var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
  $stateProvider 
  .state("hello",
  {
   url: '/hello',
   templateUrl: "course.html"
  });
  


  $stateProvider 
  .state("about",
  {
   url: '/about',
    templateUrl: 'student.html'
  });
  
});


myApp.controller("CourseController", function($scope){
    $scope.courses=[
        {name:"c"},
        {name:"c++"},
        {name:"c#"},
    ];
});

myApp.controller("StudentController", function($scope){
    $scope.students=[
        {name:"Ravi"},
        {name:"Mohan"},
        {name:"Sanju"},
    ];
});