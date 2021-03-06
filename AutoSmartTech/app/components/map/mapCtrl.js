homeTechApp.controller("mapCtrl", function ($scope, $http, $location, activeUser, mapMarker, NgMap ) {

  // If the user is not logged in going back to home screen
  if (!activeUser.isLoggedIn()) {
    $location.path("/");
    return;
  }

  //Autocomplete Menu (disabled)
  var vm = this;

  vm.types = "['establishment']";
  vm.mybounds = {center: {lat: 32, lng: 34.8}, radius: 50000};
  vm.myDirections = {
    draggable: "true",
    panel: "map-panel",
    travelmode: "DRIVING",
    origin: "Houston, Texsas, US",
    destination: "Montreal, Canada"
  };

  vm.placeChanged = function() {
    vm.place = this.getPlace();
    console.log($scope.vm.place);
    console.log('location', vm.place.geometry.location);
    vm.map.setCenter(vm.place.geometry.location);
  };
  
  NgMap.getMap().then(function(map) {
    vm.map = map;
  });

  //Angular App Module and Controller
  var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(32,34),
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

  vm.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  google.maps.event.addListener(vm.map, 'click', function(event) {
    placeMarker(event.latLng);
  });
  
  $scope.markers = [];
  
  var infoWindow = new google.maps.InfoWindow();
  
  //Creating new markers
  var createMarker = function (info){
      
      var marker = new google.maps.Marker({
          map: vm.map,
          position: new google.maps.LatLng(info.lat, info.long),
          title: info.username + "-" + info.role
      });
      marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
      
      google.maps.event.addListener(marker, 'click', function(){
          infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
          infoWindow.open(vm.map, marker);
      });
      
      $scope.markers.push(marker);
      
  };  
  
  $scope.openInfoWindow = function(e, selectedMarker){
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
  };

  //Fetching Marers
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
        map: vm.map
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