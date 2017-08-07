homeTechApp.controller("videoCtrl", function ($scope, $http) {
  
  //fetching 
  $http.get("/WebDev-JS/AutoSmartTech/assets/json/video.json").then(function (response) {
    if(response.status == 200) {
      $scope.videoList = response.data;
    } else {
      console.log("Video http failed.");
    }
    });  
  
});