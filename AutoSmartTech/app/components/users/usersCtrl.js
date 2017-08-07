homeTechApp.controller("usersCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/WebDev-JS/AutoSmartTech/assets/json/users.json").then(function (response) {
    if(response.status == 200) {
      $scope.usersList = response.data;
    } else {
      console.log("Users http failed.");
    }
    });  
  
});