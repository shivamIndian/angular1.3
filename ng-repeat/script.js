var app= angular.module("ngRepeat",[]);

app.controller("repeatController", function($scope){
          $scope.emps=[
              { name:"testa", address:"locA", status:"checka" },
              { name:"testb", address:"locb", status:"checkb" },
              { name:"testc", address:"locC", status:"checkC" },
              { name:"testD", address:"locD", status:"checkD" }
          ];
});