var app = angular.module('actorsApp', []);
app.controller('actorCtrl', function($scope, $http) {
    $http.get("actors.json").then(function (response) {
      $scope.actors = response.data.actors;
  }, function myError(response) {
        $scope.actors = response.statusText;
        console.log($scope.actors);
    });
});


 /*  

var actorApp = angular.module("actorsApp", []);
actorApp.controller("actorCtrl", function ($scope, $http) {

    $http.get("actors.json")
    .then(function(response) {
        $scope.actors = response.data.acors;
        console.log($scope.actors);
    }, function myError(response) {
        $scope.actors = response.statusText;
        console.log($scope.actors);
    });
});



 function actor(first, last, img, birthDate, aCountry, aUrl) {
      this.name= {firstName: first,lastName:last};
      this.actorImg = img;
      this.birthDate = birthDate;
      this.Country = aCountry;
      this.actorURL = aUrl;
      console.log(this);
  }

  $scope.actors = [
    new actor("Gal", "Gadot", "GalGadot-Img.jpg", "April 30, 1985", "Rosh Ha'ayin, Israel", "http://www.imdb.com/name/nm2933757/"),
    new actor("Robert", "De Niro", "RobertDeNiro-Img.jpg", "August 17, 1943", "New York City, New York, USA", "http://www.imdb.com/name/nm0000134/" ),
    new actor("Angelina", "Jolie", "AngelinaJolie-Img.jpg", "June 4, 1975", "Los Angeles, California, USA", "http://www.imdb.com/name/nm0001401/" ),
    new actor("Leonardo", "DiCaprio", "LeonardoDiCaprio-Img.jpg", "November 11, 1974", "Hollywood, Los Angeles, California, USA", "http://www.imdb.com/name/nm0000138/" ),
    new actor("Brad", "Pitt", "BradPitt-Img.jpg", "December 18, 1963", "Shawnee, Oklahoma, USA", "http://www.imdb.com/name/nm0000093/" ),
    new actor("Bruce", "Willis", "BruceWillis-Img.jpg", "March 19, 1955", "Idar-Oberstein, West Germany", "http://www.imdb.com/name/nm0000246/" ),
    new actor("Tom", "Cruise", "TomCruise-Img.jpg", "July 3, 1962", "Syracuse, New York, USA", "//http://www.imdb.com/name/nm0000129/" ),
    new actor("Julia", "Roberts", "JuliaRoberts-Img.jpg", "October 28, 1967", "Smyrna, Georgia, USA", "http://www.imdb.com/name/nm0000210/" )
  ];
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
