homeTechApp.controller("aboutCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/AutoSmartTech/assets/json/about.json").then(function (response) {
    if(response.status == 200) {
      $scope.aboutList = response.data;
    } else {
      console.log("About http failed.");
    }
    });  
  
});