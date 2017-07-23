myNbaApp.factory("Player", function(converter) {

  function Player(plainObject) {
    this.firstName = plainObject.firstName;
    this.lastName = plainObject.lastName;
    this.team = plainObject.team;
    this.url = plainObject.url;
    this.isSelected = false;
    this.weight = converter.weight(plainObject.weight, plainObject.weightUnit, "KG");
    this.fullName = function() {
      return this.firstName + " " + this.lastName
    };
  }

  return Player;

  
})