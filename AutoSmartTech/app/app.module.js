var homeTechApp = angular.module("homeTechApp", ['ngRoute']);

// Application routing 
homeTechApp.config(function ($routeProvider) {
  $routeProvider

// Application landing page 
  .when("/", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/about/aboutView.html",
    controller: "aboutCtrl"
  })

// Application contact us page 
  .when("/contactus", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/contactus/contactusView.html",
    controller: "contactusCtrl"
  }) 

// Application control page 
  .when("/control", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/control/controlView.html",
    controller: "controlCtrl"
  }) 

// Application devices page 
  .when("/devices", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/devices/devicesView.html",
    controller: "devicesCtrl"
  })

// Application help page 
  .when("/help", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/helper/helperView.html",
    controller: "helperCtrl"
  }) 

// Application history page 
  .when("/history", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/history/historyView.html",
    controller: "historyCtrl"
  }) 

// Application home page 
  .when("/home", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/home/homeView.html",
    controller: "homeCtrl"
  }) 

// Application sign up page 
  .when("/join", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/join/joinView.html",
    controller: "joinCtrl"
  }) 

// Application login page 
  .when("/login", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/login/loginView.html",
    controller: "loginCtrl"
  }) 

// Application map page 
  .when("/map", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/map/mapView.html",
    controller: "mapCtrl"
  }) 

// Application preferences page 
  .when("/preferences", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/settings/preferencesView.html",
    controller: "preferencesCtrl"
  }) 

// Application privacy page 
  .when("/privacy", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/privacy/privacyView.html",
    controller: "privacyCtrl"
  }) 

// Application rules page 
  .when("/rules", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/rules/rulesView.html",
    controller: "rulesCtrl"
  }) 

// Application secuirty page 
  .when("/security", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/security/securityView.html",
    controller: "securityCtrl"
  }) 

// Application terms page 
  .when("/terms", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/terms/termsView.html",
    controller: "termsCtrl"
  }) 

// Application users page 
  .when("/users", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/users/usersView.html",
    controller: "usersCtrl"
  }) 

// Application video page 
 .when("/video", {
    templateUrl: "/WebDev-JS/AutoSmartTech/app/components/video/videoView.html",
    controller: "videoCtrl"
  }) 

});
