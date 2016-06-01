angular.module('BreedServices', ['ngResource'])
.factory('Breed', ['$resource', function($resource) {
  return $resource('/api/breed/:id');
}]);
