var ActorApp = angular.module("ActorApp", []);
passportApp.controller("ActorCtrl", function ($scope, $http) {
$http.get("actors.html").success(function(response) {
$scope.passports = response.data;
}).error(function(data, status, headers, config) {
console.log("Error");
});
});

scope.actors = [
{"actorName": "", "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"actorName": "", "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"actorName": "", "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"actorName": "", "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" }
]

);


var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("welcome.htm")
  .then(function(response) {
      $scope.myWelcome = response.data;
  });
});
