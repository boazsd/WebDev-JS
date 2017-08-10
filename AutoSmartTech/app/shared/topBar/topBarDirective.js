homeTechApp.directive("topBar", function() {
    return {
        templateUrl : "/WebDev-JS/AutoSmartTech/app/shared/topBar/topBar.html"
    };

    function userSetting() {
        console.log('User Setting function');
    };

    function userHelper() {
        console.log('Help function');
    };

    function logOutUser() {
        console.log('Logout function');
    };
});

