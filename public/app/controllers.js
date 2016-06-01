angular.module('BreedCtrls', ['BreedServices'])
.controller('HomeCtrl', ['$scope', 'Recipe', function($scope, Recipe) {
  $scope.breeds = [];

  Breed.query(function success(data) {
    $scope.breeds = data;
  }, function error(data) {
    console.log(data);
  });

  $scope.deleteBreed = function(id, recipesIdx) {
    Recipe.delete({id: id}, function success(data) {
      $scope.breeds.splice(breedsIdx, 1);
    }, function error(data) {
      console.log(data);
    });
  }
}])
.controller('ShowCtrl', ['$scope', '$stateParams', 'Breed', function($scope, $stateParams, Recipe) {
  $scope.breed = {};

  Breed.get({id: $stateParams.id}, function success(data) {
    $scope.breed = data;
  }, function error(data) {
    console.log(data);
  });
}])
.controller('NewCtrl', ['$scope', '$location', 'Breed', function($scope, $location, Breed) {
  $scope.breed = {
    title: '',
    description: '',
    image: ''
  };

  $scope.createRecipe = function() {
    Recipe.save($scope.recipe, function success(data) {
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
