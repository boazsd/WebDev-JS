var homeTechApp = angular.module("homeTechApp", ["ngRoute"]);

// Application routing 
homeTechApp.config(function ($routeProvider) {
  $routeProvider

// Application landing page 
  .when("/", {
    templateUrl: "app/components/about/aboutView.html",
    controller: "aboutCtrl"
  })

// Application contact us page 
  .when("/contactus", {
    templateUrl: "app/components/contactus/contactusView.html",
    controller: "contactusCtrl"
  }) 

// Application control page 
  .when("/control", {
    templateUrl: "app/components/control/controlView.html",
    controller: "controlCtrl"
  }) 

  .when("/devices", {
    templateUrl: "app/components/devices/devicesView.html",
    controller: "devicesCtrl"
  })

  .when("/history", {
    templateUrl: "app/components/history/historyView.html",
    controller: "historyCtrl"
  }) 

  .when("/home", {
    templateUrl: "app/components/home/homeView.html",
    controller: "homeCtrl"
  }) 

// Application sign up page 
  .when("/join", {
    templateUrl: "app/components/join/joinView.html",
    controller: "joinCtrl"
  }) 

// Application login page 
  .when("/login", {
    templateUrl: "app/components/login/loginView.html",
    controller: "loginCtrl"
  }) 

// Application map page 
  .when("/map", {
    templateUrl: "app/components/map/mapView.html",
    controller: "mapCtrl"
  }) 

// Application privacy page 
  .when("/privacy", {
    templateUrl: "app/components/privacy/privacyView.html",
    controller: "privacyCtrl"
  }) 

// Application rules page 
  .when("/rules", {
    templateUrl: "app/components/rules/rulesView.html",
    controller: "rulesCtrl"
  }) 

// Application secuirty page 
  .when("/security", {
    templateUrl: "app/components/security/securityView.html",
    controller: "securityCtrl"
  }) 

// Application terms page 
  .when("/terms", {
    templateUrl: "app/components/terms/termsView.html",
    controller: "termsCtrl"
  }) 

// Application users page 
  .when("/users", {
    templateUrl: "app/components/users/usersView.html",
    controller: "usersCtrl"
  }) 

// Application video page 
 .when("/video", {
    templateUrl: "app/components/video/videoView.html",
    controller: "videoCtrl"
  }) 

});
