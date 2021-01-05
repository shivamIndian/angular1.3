var app = angular.module("sortingApp",[]);
app.controller("sortingController", function($scope){
       
    $scope.stds=[
              {name:"test" ,class:"testA",city:"texta"},
              {name:"testb" ,class:"testb",city:"textb"},
              {name:"testc" ,class:"testc",city:"textc"},
              {name:"testd" ,class:"testd",city:"textd"},
            ];
     $scope.sortData="name";       
});