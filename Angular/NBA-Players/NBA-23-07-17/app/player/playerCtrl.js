var myPlayerCtrl = myNbaApp.controller('PlayerListCtrl', function($scope, $http, Player, $location, $routeParams) {

  $scope.dataReady = false;
  $scope.selectedPlayer = $routeParams.playerIndex;

  $http.get("app/data/players.json").then(function(response) {
    $scope.players = [];
    for (var i = 0; i < response.data.length; i++) {
      $scope.players.push(new Player(response.data[i]))
    }
    $scope.dataReady = true;
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

  $scope.liDblClicked = function(index) {
    $location.path("players/" + index);
  }


  $scope.myName = "Nir Channes";
});


myPlayerCtrl.directive("playerItem", function() {
  return {
    templateUrl: "app/player/playerItem.html",
    restrict: 'E'
  }
});



myPlayerCtrl.directive("myFirstDirective", function() {
  return {
    /*template: "<h1>Hello {{myName}}</h1><div ng-repeat='player in players'>{{player.fullName()}}</div>"  */
    templateUrl: "myDirective.html"
  }
});