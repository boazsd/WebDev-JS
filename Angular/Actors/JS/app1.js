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

    $http.get("actors.json")
    .then(function(response) {
        $scope.actors = response.data.acors;
        console.log($scope.actors);
    }, function myError(response) {
        $scope.actors = response.statusText;
        console.log($scope.actors);
    });
});

$scope.actors = [
{"firstName": "Gal", "lastName": "Gadot", "actorImg": "GalGadot-Img.jpg", "birthDate": "April 30, 1985", "Country": "Rosh Ha'ayin, Israel", "actorURL": "http://www.imdb.com/name/nm2933757/"},
{"firstName": "Robert", "lastName": "De Niro", "actorImg": "RobertDeNiro-Img.jpg", "birthDate": "August 17, 1943", "Country": "New York City, New York, USA", "actorURL": "http://www.imdb.com/name/nm0000134/"},
{"firstName": "Angelina", "lastName": "Jolie", "actorImg": "AngelinaJolie-Img.jpg", "birthDate": "June 4, 1975", "Country": "Los Angeles, California, USA", "actorURL": "http://www.imdb.com/name/nm0001401/"},
{"firstName": "Leonardo", "lastName": "DiCaprio", "actorImg": "LeonardoDiCaprio-Img.jpg", "birthDate": "November 11, 1974", "Country": "Hollywood, Los Angeles, California, USA", "actorURL": "http://www.imdb.com/name/nm0000138/"},
{"firstName": "Brad", "lastName": "Pitt", "actorImg": "BradPitt-Img.jpg", "birthDate": "December 18, 1963", "Country": "Shawnee, Oklahoma, USA", "actorURL": "http://www.imdb.com/name/nm0000093/"},
{"firstName": "Bruce", "lastName": "Willis", "actorImg": "BruceWillis-Img.jpg", "birthDate": "March 19, 1955", "Country": "Idar-Oberstein, West Germany", "actorURL": "http://www.imdb.com/name/nm0000246/"},
{"firstName": "Tom", "lastName": "Cruise", "actorImg": "TomCruise-Img.jpg", "birthDate": "July 3, 1962", "Country": "Syracuse, New York, USA", "actorURL": "http://www.imdb.com/name/nm0000129/"},
{"firstName": "Julia", "lastName": "Roberts", "actorImg": "JuliaRoberts-Img.jpg", "birthDate": "October 28, 1967", "Country": "Smyrna, Georgia, USA", "actorURL": "http://www.imdb.com/name/nm0000210/"}
];





var actorApp = angular.module("actorsApp", []);
actorApp.controller("actorCtrl", function ($scope, $http) {

function actor(first, last, img, birthDate, aCountry, aUrl) {
      this.firstName = first;
      this.lastName = last;
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



*/

 var app = angular.module('actorsApp', []);

app.controller('actorCtrl', function($scope){

  function actor(first, last, img, birthDate, aCountry, aUrl) {
      this.firstName = first;
      this.lastName = last;
      this.actorImg = img;
      this.birthDate = birthDate;
      this.Country = aCountry;
      this.actorURL = aUrl;
      this.isSelected = false;
      this.bDate = function() { return  Date.parse(this.birthDate); };
      this.fullName = function() { return this.firstName + " " + this.lastName; };
  
      console.log(this);
  }

  $scope.fullNameFilter = function(actor) {
    if (!$scope.actorFilter) {
      return true;
    } else if (actor.fullName().toLowerCase().indexOf($scope.actorFilter.toLowerCase()) != -1) {
      return true;
    } else {
      return false;
    }
  };

  $scope.liClicked = function(actor) {
    actor.isSelected = !actor.isSelected;
  }


  $scope.actors = [
    new actor("Gal", "Gadot", "GalGadot-Img.jpg", "April 30, 1985", "Rosh Ha'ayin, Israel", "http://www.imdb.com/name/nm2933757/"),
    new actor("Robert", "De Niro", "RobertDeNiro-Img.jpg", "August 17, 1943", "New York City, New York, USA", "http://www.imdb.com/name/nm0000134/" ),
    new actor("Angelina", "Jolie", "AngelinaJolie-Img.jpg", "June 4, 1975", "Los Angeles, California, USA", "http://www.imdb.com/name/nm0001401/" ),
    new actor("Leonardo", "DiCaprio", "LeonardoDiCaprio-Img.jpg", "November 11, 1974", "Hollywood, Los Angeles, California, USA", "http://www.imdb.com/name/nm0000138/" ),
    new actor("Brad", "Pitt", "BradPitt-Img.jpg", "December 18, 1963", "Shawnee, Oklahoma, USA", "http://www.imdb.com/name/nm0000093/" ),
    new actor("Bruce", "Willis", "BruceWillis-Img.jpg", "March 19, 1955", "Idar-Oberstein, West Germany", "http://www.imdb.com/name/nm0000246/" ),
    new actor("Tom", "Cruise", "TomCruise-Img.jpg", "July 3, 1962", "Syracuse, New York, USA", "//http://www.imdb.com/name/nm0000129/" ),
    new actor("Julia", "Roberts", "JuliaRoberts-Img.jpg", "October 28, 1967", "Smyrna, Georgia, USA", "http://www.imdb.com/name/nm0000210/" ),
    new actor("Scarlett", "Johansson", "ScarlettJohansson-Img.jpg", "November 22, 1984", "New York City, New York, USA", "http://www.imdb.com/name/nm0424060/" ),
    new actor("Natalie", "Portman", "NataliePortman-Img.jpg", "June 9, 1981", "Jerusalem, Israel", "http://www.imdb.com/name/nm0000204/" )
 
  ];

  $scope.items = [
      { title: "One", image: "http://placehold.it/560x290/ffccff" },
      { title: "Two", image: "http://placehold.it/560x290/66ffcc" },
      { title: "Three", image: "http://placehold.it/560x290/66ffff" },
      { title: "Four", image: "http://placehold.it/560x290/ffff99" },
      { title: "Five", image: "http://placehold.it/560x290/ffcccc" },
      { title: "Six", image: "http://placehold.it/560x290/ccffcc" },
      { title: "Seven", image: "http://placehold.it/560x290/99ddff" }
  ];  

});

app.directive('coverflow', function(){
    return{
        restrict: 'E',
        scope: {
            list: '='
        },
        template:
        '<div class="coverflow">'+
            '<div class="coverflow__container">' +
                '<div class="coverflow__element" style="{{loadElementStyle($index)}}" ng-click="changeIndex($index)" ng-repeat="item in list">' +
                    '<h2  class="coverflow__title">{{ item.title }}</h2>' +
                    '<div class="coverflow__image">'+
                      '<img src="{{ item.image }}" />' +
                   '</div>' +
                '</div>' +
           '</div>' +
        '</div>',
        replace: true,
        link:function(scope, element, attrs)  {
                function listenToKeystrokes() {
                    var e;
                    $(document).keydown(function(e) {
                        if (e.which === 37) {
                            goLeft();
                        } else if (e.which === 39) {
                            goRight();
                        }
                        scope.$apply();
                    });
                }
                scope.coverflowItems = scope.list;
                function init() {
                    scope.index = parseInt(scope.coverflowItems.length / 2);
                    listenToKeystrokes();
                }
                init();
                function getNonFocussedElementStyle(loc, i, multiplier) {
                    return "transform: translateX(" + String(loc * 40 -12 * multiplier) + "%) rotateY(" + String(loc * -90) +"deg) scale(.6); z-index: " + String(loc * multiplier);
                }
                function getFocussedElementStyle(i) {
                    return "transform: translateZ(0);";
                }
                function goLeft() {
                    if(scope.index !== 0) {
                        scope.index--;
                    }
                }
                function goRight() {
                    if(scope.index !== scope.coverflowItems.length - 1) {
                        scope.index++;
                    }
                }
                scope.changeIndex = function(i) {
                    scope.index = i;
                };
                scope.loadElementStyle = function(i) {
                    var multiplier = scope.index - i;
                    if(i < scope.index) {
                       return getNonFocussedElementStyle(-1, i, multiplier);
                    } else if (i === scope.index) {
                       return getFocussedElementStyle(i);
                    } else {
                       return getNonFocussedElementStyle(1, i, multiplier);
                    }
                };
            }
        }
    }
);

/*
app.controller('dataController', ['$scope',
  function($scope) {
    $scope.items = [
      { title: "One", image: "http://placehold.it/560x290/ffccff" },
      { title: "Two", image: "http://placehold.it/560x290/66ffcc" },
      { title: "Three", image: "http://placehold.it/560x290/66ffff" },
      { title: "Four", image: "http://placehold.it/560x290/ffff99" },
      { title: "Five", image: "http://placehold.it/560x290/ffcccc" },
      { title: "Six", image: "http://placehold.it/560x290/ccffcc" },
      { title: "Seven", image: "http://placehold.it/560x290/99ddff" }
    ]
}]);

*/
