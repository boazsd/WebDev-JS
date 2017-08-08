// Shared User Constructor
homeTechApp.factory("User", function(){
    function User(plainObject) {
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.userName = plainObject.userName;
        this.phoneNumber = plainObject.phoneNumber;
        this.password = plainObject.password;
        this.role = plainObject.role;
        this.hubId = plainObject.hubId;
        this.displayLang = plainObject.displayLang;
        this.notificationProfile = plainObject.notificationProfile;
    };

    return User;
});

// Service that manges the active user
homeTechApp.factory("activeUser", function(User){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get
    };   
});