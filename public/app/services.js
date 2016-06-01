angular.module('RecipeServices', ['ngResource'])
.factory('Recipe', ['$resource', function($resource) {
  return $resource('/api/recipes/:id');
}]);
