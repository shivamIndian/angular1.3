var app = angular.module("hideShowApp",[]);
app.controller("hideShowController", function($scope){
       
    $scope.stds=[
              {name:"test" ,class:"testA",city:"texta"},
              {name:"testb" ,class:"testb",city:"textb"},
              {name:"testc" ,class:"testc",city:"textc"},
              {name:"testd" ,class:"testd",city:"textd"},
            ];
      
});