angular.module('BreedCtrls', ['BreedServices'])
.controller('HomeCtrl', ['$scope', 'Breed', function($scope, Breed) {
  $scope.breeds = [];

  Breed.query(function success(data) {
    $scope.breeds = data;
  }, function error(data) {
    console.log(data);
  });

  $scope.deleteBreed = function(id, breedIdx) {
    Breed.delete({id: id}, function success(data) {
      $scope.breed.splice(breedIdx, 1);
    }, function error(data) {
      console.log(data);
    });
  }
}])
.controller('ShowCtrl', ['$scope', '$stateParams', 'Breed', function($scope, $stateParams, Breed) {
  $scope.breed = {};

  Breed.get({id: $stateParams.id}, function success(data) {
    $scope.breed = data;
  }, function error(data) {
    console.log(data);
  });
}])
.controller('NewCtrl', ['$scope', '$location', 'Breed', function($scope, $location, Breed) {
  $scope.breed = {
    name: '',
    size: '',
    lifespan: '', 
    training: '', 
    shedding: '',
    energylevel: '', 
    image: ''
  };

  $scope.createBreed = function() {
    Breed.save($scope.breed, function success(data) {
      $location.path('/');
    }, function error(data) {
      console.log(data);
    });
  }
}])
.controller('NavCtrl', ['$scope', 'Auth', '$state', 'Alerts', function($scope, Auth, $state, Alerts) {
  $scope.Auth = Auth;
  $scope.logout = function() {
    Auth.removeToken();
    Alerts.add('success', 'Logged out!');
    $state.reload();
  }
}])
.controller('SignupCtrl', ['$scope', '$http', '$location', 'Alerts', function($scope, $http, $location, Alerts) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userSignup = function() {
    $http.post('/api/users', $scope.user).then(function success(res) {
      Alerts.add('success', 'Signed up in!');
      $location.path('/');
    }, function error(res) {
      Alerts.add('danger', 'Error. See console');
      console.log(res);
    });
  }
}])
.controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', 'Alerts', function($scope, $http, $location, Auth, Alerts) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userLogin = function() {
    $http.post('/api/auth', $scope.user).then(function success(res) {
      Auth.saveToken(res.data.token);
      Alerts.add('success', 'Logged in!');
      console.log('Token:', res.data.token);
      $location.path('/');
    }, function error(res) {
      Alerts.add('danger', 'Incorrect email/password');
      console.log(res);
    });
  }
}])
.controller('AlertCtrl', ['$scope', 'Alerts', function($scope, Alerts) {
  $scope.Alerts = Alerts;
}]);
