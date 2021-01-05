var app = angular.module("includeApp",[]);
app.controller("includeController", function($scope){
       
    $scope.stds=[
              {name:"test" ,class:"testA",city:"texta", secondName:"check"},
              {name:"testb" ,class:"testb",city:"textb", secondName:"checkb"},
              {name:"testc" ,class:"testc",city:"textc", secondName:"checkc"},
              {name:"testd" ,class:"testd",city:"textd", secondName:"checkd"},
            ];
      $scope.tableView=table.html;
});