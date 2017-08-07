homeTechApp.controller("loginCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/AutoSmartTech/assets/json/login.json").then(function (response) {
    if(response.status == 200) {
      $scope.loginList = response.data;
    } else {
      console.log("Login http failed.");
    }
    });  
  
});