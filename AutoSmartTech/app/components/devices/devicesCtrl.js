homeTechApp.controller("devicesCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("devices.json").then(function (response) {
    if(response.status == 200) {
      $scope.devicesList = response.data;
    } else {
      console.log("Devices http failed.");
    }
    });  
  
});