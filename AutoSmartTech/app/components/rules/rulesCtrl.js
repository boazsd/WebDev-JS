homeTechApp.controller("rulesCtrl", function ($scope, $http, $location, activeUser) {
  
    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
  
  //fetching 
  $http.get("/WebDev-JS/AutoSmartTech/assets/json/rules.json").then(function (response) {
    if(response.status == 200) {
      $scope.rulesList = response.data;
    } else {
      console.log("Rules http failed.");
    }
    });  
  
});