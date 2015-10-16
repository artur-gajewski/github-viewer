(function(){
  
  var app = angular.module("githubViewer", ["ngRoute"]);
  
  app.config(function($routeProvider){
    $routeProvider
      .when("/main", {
        templateUrl: "views/main.html",
        controller: "MainController"
      })
      .when("/user/:username", {
        templateUrl: "views/user.html",
        controller: "UserController"
      })
      .otherwise({
        redirectTo:"/main"
      });
  });
}());