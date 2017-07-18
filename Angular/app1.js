 /*  
var app = angular.module('actorsApp', []);
app.controller('actorCtrl', function($scope, $http) {
    $http.get("actors.json").then(function (response) {
      $scope.actors = response.data.actors;
  }, function myError(response) {
        $scope.actors = response.statusText;
        console.log($scope.actors);
    });
});



*/

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

scope.actors = [
{"firstName": "Gal", "lastName": "Gadot", "actorImg": "GalGadot-Img.jpg", "birthDate": "April 30, 1985", "Country": "Rosh Ha'ayin, Israel", "actorURL": "http://www.imdb.com/name/nm2933757/"},
{"firstName": "Robert", "lastName": "De Niro", "actorImg": "RobertDeNiro-Img.jpg", "birthDate": "August 17, 1943", "Country": "New York City, New York, USA", "actorURL": "http://www.imdb.com/name/nm0000134/"},
{"firstName": "Angelina", "lastName": "Jolie", "actorImg": "AngelinaJolie-Img.jpg", "birthDate": "June 4, 1975", "Country": "Los Angeles, California, USA", "actorURL": "http://www.imdb.com/name/nm0001401/"},
{"firstName": "Leonardo", "lastName": "DiCaprio", "actorImg": "LeonardoDiCaprio-Img.jpg", "birthDate": "November 11, 1974", "Country": "Hollywood, Los Angeles, California, USA", "actorURL": "http://www.imdb.com/name/nm0000138/"},
{"firstName": "Brad", "lastName": "Pitt", "actorImg": "BradPitt-Img.jpg", "birthDate": "December 18, 1963", "Country": "Shawnee, Oklahoma, USA", "actorURL": "http://www.imdb.com/name/nm0000093/"},
{"firstName": "Bruce", "lastName": "Willis", "actorImg": "BruceWillis-Img.jpg", "birthDate": "March 19, 1955", "Country": "Idar-Oberstein, West Germany", "actorURL": "http://www.imdb.com/name/nm0000246/"},
{"firstName": "Tom", "lastName": "Cruise", "actorImg": "TomCruise-Img.jpg", "birthDate": "July 3, 1962", "Country": "Syracuse, New York, USA", "actorURL": "http://www.imdb.com/name/nm0000129/"},
{"firstName": "Julia", "lastName": "Roberts", "actorImg": "JuliaRoberts-Img.jpg", "birthDate": "October 28, 1967", "Country": "Smyrna, Georgia, USA", "actorURL": "http://www.imdb.com/name/nm0000210/"}
];


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

