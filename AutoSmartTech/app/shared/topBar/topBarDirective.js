homeTechApp.directive("topBar", function() {
    return {
        scope: {},
        controller: function ($scope) {
            $scope.userPreferences = function() {
                console.log('User preferences function');
                // $location.path("/preferences");
                window.open("/WebDev-JS/AutoSmartTech/index.html#!/preferences");
            };

            $scope.userHelper = function() {
                console.log('Help function');
                // $location.path("/help");
                window.open("/WebDev-JS/AutoSmartTech/index.html#!/help");
            };

            $scope.logOutUser = function() {
                console.log('Logout function');
                //$location.path("/");
                //window.open("/logout");
            };
        },
        controllerAs: 'ctrl',
        templateUrl : "/WebDev-JS/AutoSmartTech/app/shared/topBar/topBar.html"
        };
});

