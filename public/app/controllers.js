angular.module('RecipeCtrls', ['RecipeServices'])
.controller('HomeCtrl', ['$scope', 'Recipe', function($scope, Recipe) {
  $scope.recipes = [];

  Recipe.query(function success(data) {
    $scope.recipes = data;
  }, function error(data) {
    console.log(data);
  });

  $scope.deleteRecipe = function(id, recipesIdx) {
    Recipe.delete({id: id}, function success(data) {
      $scope.recipes.splice(recipesIdx, 1);
    }, function error(data) {
      console.log(data);
    });
  }
}])
.controller('ShowCtrl', ['$scope', '$stateParams', 'Recipe', function($scope, $stateParams, Recipe) {
  $scope.recipe = {};

  Recipe.get({id: $stateParams.id}, function success(data) {
    $scope.recipe = data;
  }, function error(data) {
    console.log(data);
  });
}])
.controller('NewCtrl', ['$scope', '$location', 'Recipe', function($scope, $location, Recipe) {
  $scope.recipe = {
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
