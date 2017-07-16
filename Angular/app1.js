var ActorApp = angular.module("actorsApp", []);
ActorApp.controller("ActorCtrl", function ($scope) {

  function actor(first, last, img, birthDate, aCountry, aUrl) {
      this.name.firstName = first;
      this.name.lastName = last;
      this.actorImg = img;
      this.birthDate = birthDate;
      this.Country = aCountry;
      this.actorURL = aUrl;
      console.log(this);
  }

  $scope.actors = [
    new actor("Gal", "Gadot", "GalGadot-Img.jpg", "01/01/01", "Israel", "http://www.imdb.com/name/nm2933757/"),
    new actor("Gal", "Gadot", "", "", "", "" ),
    new actor("Robert", "De Niro", "", "", "", "" ),
    new actor("Leonardo", "DiCaprio", "", "", "", "" ),
    new actor("Angelina", "Jolie", "", "", "", "" ),
    new actor("Brad", "Pitt", "", "", "", "" ),
    new actor("Julia", "Roberts", "", "", "", "" )
  ];
 });


 /*  
  $http.get("actors.html").success(function(response) {
    $scope.actors = response.data;
  }).error(function(data, status, headers, config) {
    console.log("Error");
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
*/
