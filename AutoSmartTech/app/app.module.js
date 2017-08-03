var homeTechApp = angular.module("homeTechApp", ["ngRoute"]);


// Application routing 
homeTechApp.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "app/components/about/aboutView.html",
    controller: "aboutCtrl"
  }) 
  .when("/login", {
    templateUrl: "app/components/login/loginView.html",
    controller: "loginCtrl"
  }) 
  .when("/home", {
    templateUrl: "app/components/home/homeView.html",
    controller: "homeCtrl"
  }) 
  .when("/devices", {
    templateUrl: "app/components/devices/devicesView.html",
    controller: "devicesCtrl"
  })
  .when("/control", {
    templateUrl: "app/components/control/controlView.html",
    controller: "controlCtrl"
  }) 
  .when("/rules", {
    templateUrl: "app/components/rules/rulesView.html",
    controller: "rulesCtrl"
  }) 
  .when("/video", {
    templateUrl: "app/components/video/videoView.html",
    controller: "videoCtrl"
  }) 
  .when("/history", {
    templateUrl: "app/components/history/historyView.html",
    controller: "historyCtrl"
  }) 
  .when("/users", {
    templateUrl: "app/components/users/usersView.html",
    controller: "usersCtrl"
  }) 
  .when("/join", {
    templateUrl: "app/components/join/joinView.html",
    controller: "joinCtrl"
  }) 
  .when("/login", {
    templateUrl: "app/components/login/loginView.html",
    controller: "loginCtrl"
  }) 
});
