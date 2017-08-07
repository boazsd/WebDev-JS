homeTechApp.controller("contactusCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/WebDev-JS/AutoSmartTech/assets/json/contactus.json").then(function (response) {
    if(response.status == 200) {
      $scope.contactusList = response.data;
    } else {
      console.log("contactus http failed.");
    }
    });  
  
});