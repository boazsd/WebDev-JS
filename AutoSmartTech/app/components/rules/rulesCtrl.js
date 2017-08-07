homeTechApp.controller("rulesCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/WebDev-JS/AutoSmartTech/assets/json/rules.json").then(function (response) {
    if(response.status == 200) {
      $scope.rulesList = response.data;
    } else {
      console.log("Rules http failed.");
    }
    });  
  
});