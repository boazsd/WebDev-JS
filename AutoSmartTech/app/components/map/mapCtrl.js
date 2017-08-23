homeTechApp.controller("mapCtrl", function ($scope, $http, $location, activeUser, mapMarker ) {

  // If the user is not logged in going back to home screen
  if (!activeUser.isLoggedIn()) {
    $location.path("/");
    return;
  }

  //Autocomplete Menu (disabled)
//   $scope.vm = this;

//   $scope.vm.types = "['establishment']";
//   $scope.vm.mybounds = {center: {lat: 30, lng: 30}, radius: 500000};

//   $scope.vm.placeChanged = function() {
//     $scope.vm.place = this.getPlace();
//     console.log($scope.vm.place);
//     console.log('location', $scope.vm.place.geometry.location);
//     $scope.vm.map.setCenter($scope.vm.place.geometry.location);
//   };
  
//   homeTechApp.getMap().then(function(map) {
//     $scope.vm.map = map;
//   });

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
        map: $scope.map
    });
  
    $scope.map.setCenter(location);
  }
  
  
});