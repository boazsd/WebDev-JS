homeTechApp.controller("mapCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/AutoSmartTech/assets/json/map.json").then(function (response) {
    if(response.status == 200) {
      $scope.mapList = response.data;
    } else {
      console.log("Map http failed.");
    }
    });  
  
});