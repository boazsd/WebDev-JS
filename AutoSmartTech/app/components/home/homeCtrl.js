homeTechApp.controller("homeCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/WebDev-JS/AutoSmartTech/assets/json/home.json").then(function (response) {
    if(response.status == 200) {
      $scope.homeList = response.data;
    } else {
      console.log("Home http failed.");
    }
    });  
  
});