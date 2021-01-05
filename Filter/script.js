var app = angular.module("filterApp",[]);

app.controller("filterController",function($scope){
              $scope.emps=[
                      {name:"shivam",DOB:"23/11/1980",Gender:"Male",salary:56000,salaryc:55000 },
                      {name:"aman",DOB:"23/11/1989",Gender:"Male",salary:56000,salaryc:55000 },
                      {name:"clerk",DOB:"23/11/1980",Gender:"Male",salary:56000,salaryc:55000 },
                      {name:"shivam",DOB:"23/11/1980",Gender:"Male",salary:56000,salaryc:55000 },
            
                ];
               $scope.rowLimit=0;   
            });