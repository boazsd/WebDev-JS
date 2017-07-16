var ActorApp = angular.module("ActorApp", []);
ActorApp.controller("ActorCtrl", function ($scope) {

$scope.actor(first, last, img, birthDate, nationality, aUrl) {
    this.name.firstName = first;
    this.name.lastName = last;
    this.actorImg = img;
    this.actorNationality = nationality;
    this.actorURL = aUrl;
}
  /*  
  $http.get("actors.html").success(function(response) {
    $scope.actors = response.data;
  }).error(function(data, status, headers, config) {
    console.log("Error");
  });
*/
});



scope.actors = {
{"name": {"firstName": "Gal", "lastName": "Gadot"}, "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"name": {"firstName": "Robert", "lastName": "De Niro"}, "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"name": {"firstName": "Leonardo", "lastName": "DiCaprio"}, "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"name": {"firstName": "Angelina", "lastName": "Jolie"}, "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"name": {"firstName": "Brad", "lastName": "Pitt"}, "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"name": {"firstName": "Julia", "lastName": "Roberts"}, "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"name": {"firstName": "Gal6", "lastName": "dGadot"}, "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"name": {"firstName": "Gal7", "lastName": "cGadot"}, "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"name": {"firstName": "Gal8", "lastName": "bGadot"}, "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" },
{"name": {"firstName": "Gal9", "lastName": "aGadot"}, "actorImg": "", "birthDate": "", "actorNationality": "", "actorURL": "" }
};