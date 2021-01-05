var app = angular.module("eventHandel",[]);

app.controller("eventController", function($scope){
    debugger
                   $scope.technologies=[
                       {name:"C#", likes:"1", dislikes:0 },
                       {name:"ASP.NET", likes:"0", dislikes:0 },
                       {name:"SQL", likes:"0", dislikes:0 },
                       {name:"AngularJS", likes:"0", dislikes:0 },
                       
                   ];
                   
                   $scope.incrementLikes = function(technology){
                    //debugger   
                    technology.likes++;
                   }
                   $scope.decrementLikes = function(technology){
                       technology.dislikes++;
                   }
});