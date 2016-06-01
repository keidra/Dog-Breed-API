var app = angular.module('BreedApp', ['ui.router', 'ui.bootstrap', 'BreedCtrls']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/breed.html',
    controller: 'HomeCtrl'
  })
  .state('newBreeds', {
    url: '/breed/new',
    templateUrl: 'app/views/newBreeds.html',
    controller: 'NewCtrl'
  })
  .state('showBreed', {
    url: '/breed/:id',
    templateUrl: 'app/views/showBreed.html',
    controller: 'ShowCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'app/views/userSignup.html',
    controller: 'SignupCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/views/userLogin.html',
    controller: 'LoginCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}])

.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}])
