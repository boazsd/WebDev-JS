homeTechApp.controller("joinCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("assets/json/join.json").then(function (response) {
    if(response.status == 200) {
      $scope.joinList = response.data;
    } else {
      console.log("Join http failed.");
    }
    });  
  
});