// Code goes here

var myNbaApp = angular.module('nbaApp', ["ngRoute"]);

// myNbaApp.config(["$routeProvider", function($routeProvider) {}])
myNbaApp.config(function($routeProvider) {
  $routeProvider
    .when('/players', {
      templateUrl: "app/player/playerList.html",
      controller: "PlayerListCtrl"
    })
    .when('/players/:playerIndex', {
      templateUrl: "app/player/playerDetails.html",
      controller: "PlayerListCtrl"
    })
});


myNbaApp.factory('converter', function() {
  var weightUnits = ["KG", "LB", "GRAM"];
  var kgRates = {
    KG: 1,
    LB: 2.20462262,
    GRAM: 1000
  }
  
  var convertWeight = function(inWeight, inUnit, outUnit) {
    return Math.round(inWeight * kgRates[outUnit] / kgRates[inUnit]);
  }
  
  return {
    weightUnits: weightUnits,
    weight: convertWeight
  }
})
