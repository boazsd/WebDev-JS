// Shared Google Maps Marker Constructor
homeTechApp.factory("mapMarker", function(){
    function mapMarker(plainObject) {
        this.city = plainObject.city;
        this.desc = plainObject.desc;
        this.lat = plainObject.lat;
        this.long = plainObject.long;
    }

    return mapMarker;
});
