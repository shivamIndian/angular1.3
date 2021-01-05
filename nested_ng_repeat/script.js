var app = angular.module("nestedApp",[]);
app.controller("nestedController", function($scope){
            $scope.countries=[
                {
                    name:"India",
                    cities:[
                        {name:"uk"},
                        {name:"hr"},
                        {name:"up"}
                    ]
                    },

                    {
                        name:"Uk",
                        cities:[
                            {
                            name:"hw"},
                            {name:"roorke"},
                            {name:"dehradhun"}
                        ]
                        },
                         
                        {
                            name:"Up",
                            cities:[
                                {
                                name:"lucknow"},
                                {name:"sahranpur"},
                                {name:"agra"}
                                ]
                            }
                        

            
            
          
            ];
});