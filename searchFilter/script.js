var app = angular.module("searchFilter",[]);

app.controller("searchController", function($scope){
    $scope.emps=[
        { name:"testa", address:"locA", status:"checka" },
        { name:"testb", address:"locb", status:"checkb" },
        { name:"testc", address:"locC", status:"checkC" },
        { name:"testD", address:"locD", status:"checkD" }
    ];
});