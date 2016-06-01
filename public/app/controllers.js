angular.module('BreedCtrls', ['BreedServices'])
.controller('HomeCtrl', ['$scope', 'Breed', function($scope, Breed) {
  $scope.breed = [];

  Breed.query(function success(data) {
    $scope.breed = data;
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
    image:''
  };

  $scope.createBreed = function() {
    Recipe.save($scope.breed, function success(data) {
      $location.path('/');
    }, function error(data) {
      console.log(data);
    });
  }
}])
.controller('NavCtrl', ['$scope', function($scope) {
  $scope.logout = function() {
    //to implement
  }
}])
.controller('SignupCtrl', ['$scope', function($scope) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userSignup = function() {
    //to implement
  }
}])
.controller('LoginCtrl', ['$scope', function($scope) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userLogin = function() {
    //to implement
  }
}]);
