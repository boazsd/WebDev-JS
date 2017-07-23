// Code goes here

var myNbaApp = angular.module('nbaApp', []);



var myPlayerCtrl = myNbaApp.controller('PlayerListCtrl', function($scope, $http) {

  function Player(plainObject) {
    this.firstName = plainObject.firstName;
    this.lastName = plainObject.lastName;
    this.team = plainObject.team;
    this.url = plainObject.url;
    this.isSelected = false;
    this.fullName = function() {
      return this.firstName + " " + this.lastName
    };
  }
  
  $http.get("players.json").then(function(response) {
    $scope.players = [];
    for (var i = 0; i < response.data.length; i++) {
      $scope.players.push(new Player(response.data[i]))
    }
  }, function(response) {
    console.log("Error!!! " + response.statusText);
  });
  
  
  

  $scope.filterByFullName = function(player) {
    if (!$scope.filterText) {
      return true;
    } else if (player.fullName().toLowerCase().indexOf($scope.filterText.toLowerCase()) != -1) {
      return true;
    } else {
      return false;
    }
  };
  
  $scope.imageURL = "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg";

  /* Used for Table example
  $scope.orderProp = "";
  $scope.sortBy = function(sortProp) {
    $scope.orderProp = sortProp;
  }
  */

  $scope.liClicked = function(player) {
    player.isSelected = !player.isSelected;
  }

  $scope.myName = "Nir Channes";
});


myPlayerCtrl.directive("playerItem", function() {
  return {
    templateUrl: "playerItem.html",
    restrict: 'E'
  }
});



myPlayerCtrl.directive("myFirstDirective", function() {
  return {
    /*template: "<h1>Hello {{myName}}</h1><div ng-repeat='player in players'>{{player.fullName()}}</div>"  */
    templateUrl:  "myDirective.html"
  }  
});

