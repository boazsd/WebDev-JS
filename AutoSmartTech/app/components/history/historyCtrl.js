homeTechApp.controller("historyCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/AutoSmartTech/assets/json/history.json").then(function (response) {
    if(response.status == 200) {
      $scope.historyList = response.data;
    } else {
      console.log("History http failed.");
    }
    });  
  
});