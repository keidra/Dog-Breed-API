
var services = angular.module('BreedServices', ['ngResource']);
services.factory('BreedAPI', ['$resource', function($resource) {
	return $resource('/api/breed/:id', {}, {
		get: {method: 'GET', cache: false, isArray: false}
	});
}]);

