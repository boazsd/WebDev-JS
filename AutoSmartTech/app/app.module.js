var homeTechApp = angular.module("homeTechApp", ["ngRoute"]);

// router
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
    templateUrl: "components/devices/devicesView.html",
    controller: "devicesCtrl"
  })
  .when("/control", {
    templateUrl: "components/control/controlView.html",
    controller: "controlCtrl"
  }) 
  .when("/rules", {
    templateUrl: "components/rules/rulesView.html",
    controller: "rulesCtrl"
  }) 
  .when("/video", {
    templateUrl: "components/video/videoView.html",
    controller: "videoCtrl"
  }) 
  .when("/history", {
    templateUrl: "components/history/historyView.html",
    controller: "historyCtrl"
  }) 
  .when("/users", {
    templateUrl: "components/users/usersView.html",
    controller: "usersCtrl"
  }) 
});