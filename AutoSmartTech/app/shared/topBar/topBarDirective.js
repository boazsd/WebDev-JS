homeTechApp.directive("topBarDir", function($scope) {
    return {
        templateUrl : "/WebDev-JS/AutoSmartTech/app/shared/topBar/topBar.html"
    };

    $scope.userSetting = function() {
        console.log('User Setting function');
    };

    $scope.userHelper = function() {
        console.log('Help function');
    };

    $scope.logOutUser = function() {
        console.log('Logout function');
    };
});

