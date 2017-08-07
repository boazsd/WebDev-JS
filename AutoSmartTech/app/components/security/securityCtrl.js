homeTechApp.controller("securityCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/AutoSmartTech/assets/json/security.json").then(function (response) {
    if(response.status == 200) {
      $scope.securityList = response.data;
    } else {
      console.log("Security http failed.");
    }
    });  
  
});