var homeTechApp = angular.module("homeTechApp", [] );
homeTechApp.controller("mapCtrl", function ($scope, $http) {

  // //Autocomplete Menu (disabled)
  // var vm = this;

  $scope.types = "['establishment']";
  $scope.mybounds = {center: {lat: 32, lng: 34.8}, radius: 50000};
  $scope.myDirections = {
    draggable: "true",
    panel: "map-panel",
    travelmode: "DRIVING",
    origin: "Houston, Texsas, US",
    destination: "Montreal, Canada"
  };

  $scope.placeChanged = function() {
    $scope.place = this.getPlace();
    console.log($scope.place);
    console.log('location', $scope.place.geometry.location);
    $scope.map.setCenter($scope.place.geometry.location);
  };
  
  // NgMap.getMap().then(function(map) {
  //   $scope.map = map;
  // });

  //Angular App Module and Controller
 var mapOptions = {
     zoom: 8,
     center: new google.maps.LatLng(32,34.8),
     mapTypeControl: true,
     mapTypeControlOptions: {
         style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
         position: google.maps.ControlPosition.TOP_LEFT
     },
     zoomControl: true,
     zoomControlOptions: {
         position: google.maps.ControlPosition.LEFT_CENTER
     },
     scaleControl: true,
     streetViewControl: true,
     streetViewControlOptions: {
         position: google.maps.ControlPosition.LEFT_TOP
     },
     rotateControl: true,
     fullscreenControl: true,    
     mapTypeId: google.maps.MapTypeId.ROADMAP
 };

  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  google.maps.event.addListener($scope.map, 'click', function(event) {
    placeMarker(event.latLng);
  });
  
  $scope.markers = [];
  
  var infoWindow = new google.maps.InfoWindow();
  
  //Creating new markers
  var createMarker = function (info){
      
      var marker = new google.maps.Marker({
        map: $scope.map,
          position: new google.maps.LatLng(info.lat, info.long),
          title: info.username + "-" + info.role
      });
      marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
      
      google.maps.event.addListener(marker, 'click', function(){
          infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
          infoWindow.open($scope.map, marker);
      });
      
      $scope.markers.push(marker);
      
  };  
  
  $scope.openInfoWindow = function(e, selectedMarker){
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
  };

  //Fetching Markers
  $http.get("/WebDev-JS/AutoSmartTech/assets/json/map.json").then(function (response) {
    if(response.status == 200) {
      $scope.mapList = response.data;

      console.log(response.data.length);
      
      var dataMarker;
      for (i = 0; i < response.data.length; i++){
        dataMarker = response.data[i];
        console.log(JSON.stringify(dataMarker));
        createMarker(dataMarker);
      }
        } else {
      console.log("Map http failed.");
    }
  });

  function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location, 
        map: $scope.map
    });
  
    $scope.map.setCenter(location);
  }
  
  // instantiate google map objects for directions
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  var geocoder = new google.maps.Geocoder();

  // directions object -- with defaults
  $scope.directions = {
  };

  // get directions using google maps api
  $scope.getDirections = function () {
    var request = $scope.directions;
    directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap($scope.map.control.getGMap());
        directionsDisplay.setPanel(document.getElementById("directions-panel"));
        $scope.directions.showList = true;
      } else {
        alert('Google route unsuccesfull!');
      }
    });
  }

  
});