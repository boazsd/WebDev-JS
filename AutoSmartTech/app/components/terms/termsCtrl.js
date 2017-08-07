homeTechApp.controller("termsCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("assets/json/terms.json").then(function (response) {
    if(response.status == 200) {
      $scope.termsList = response.data;
    } else {
      console.log("Terms http failed.");
    }
    });  
  
});