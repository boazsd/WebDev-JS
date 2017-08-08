homeTechApp.controller("loginCtrl", function ($scope, $http, $location, activeUser, User) {
  
    // TODO: Detele this
    $scope.userName = "alice.home";
    $scope.password = "admin";

  //fetching 
  $http.get("/WebDev-JS/AutoSmartTech/assets/json/users.json").then(function (response) {
    if(response.status == 200) {
        $scope.users = [];
        var dataUser;
        for (var i = 0; i < response.data.length; i++) {
            dataUser = new User(response.data[i]);
            $scope.users.push(dataUser);
            console.log(JSON.stringify(dataUser));
        };
    } else {
      console.log("Login http failed.");
    }
    });

    $scope.failedAttempt = false;

    $scope.login = function() {
        var user = getLoggedInUser();
        if (user != null) {
            activeUser.login(user);
            $location.path("/home")
        } else {
            $scope.failedAttempt = true;
        }
    }

    var getLoggedInUser = function() {
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].email === $scope.email && $scope.users[i].password === $scope.password) {
                return $scope.users[i];
            }
        }
        return null;
    }

    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }
});
