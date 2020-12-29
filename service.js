var myApp = angular.module("myApp", []);
myApp.service("NewsService", function() {
    return {
      news: [{
        theme: "This is one new"
      }, {
        theme: "This is two new"
      }, {
        theme: "This is three new"
      }]
    }
  });