homeTechApp.controller("privacyCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/WebDev-JS/AutoSmartTech/assets/json/privacy.json").then(function (response) {
    if(response.status == 200) {
      $scope.privacyList = response.data;
    } else {
      console.log("Privacy http failed.");
    }
    });  
  
});