var app = angular.module("initApp",[]);
app.controller("initController", function($scope){
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