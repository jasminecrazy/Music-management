var app = angular.module('myApp', [ 'ngRoute', 'ui.bootstrap', 'ngResource',
		'ngMessages', 'ui.grid', 'ui.grid.pagination', 'ui.grid.selection' ]);
app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider.when("/", {
		templateUrl : "user/album.html",
		controller : "indexCtrl"

	}).when("/singer", {
		templateUrl : "user/singer.html",
		controller : "indexCtrl"

	}).when("/song", {
		templateUrl : "user/song.html",
		controller : "indexCtrl"

	}).when("/genre", {
		templateUrl : "user/genre.html",
		controller : "indexCtrl"

	})
	.when("/detail/:id", {
		templateUrl : "user/detail.html",
		controller : "indexCtrl"

	})

});