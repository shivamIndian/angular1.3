var app = angular.module("Demo", ["ui.router"]);
            app.config(function ($stateProvider) {

                $stateProvider
                    .state("home", {
                        url: "/home",
                        templateUrl: "Templates/home.html",
                        controller: "homeController",
                        controllerAs: "homeCtrl"
                    })
                    .state("courses", {
                        url: "/courses",
                        templateUrl: "Templates/courses.html",
                        controller: "coursesController",
                        controllerAs: "coursesCtrl"
                    })

                    .state("students", {
                        url: "/students",
                        templateUrl: "Templates/students.html",
                        controller: "studentsController",
                        controllerAs: "studentsCtrl"
                        
                    })
            });


            app.controller("studentsController", function (studentslist, $state, $location) {
                var vm = this;
            
                vm.studentSearch = function () {
                    if (vm.name)
                        $location.url("/studentsSearch/" + vm.name)
                    else
                        $location.url("/studentsSearch")
                }
            
                vm.reloadData = function () {
                    $state.reload();
                }
            
                vm.students = studentslist;
            })           