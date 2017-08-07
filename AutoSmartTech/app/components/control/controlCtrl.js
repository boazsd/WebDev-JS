homeTechApp.controller("controlCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/AutoSmartTech/assets/json/control.json").then(function (response) {
    if(response.status == 200) {
      $scope.controlList = response.data;
    } else {
      console.log("Control http failed.");
    }
    });  
  
});