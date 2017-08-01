var app = angular.module('myApp', [ 'ngRoute', 'ui.bootstrap', 'ngResource',
		'ngMessages', 'ui.grid', 'ui.grid.pagination', 'ui.grid.selection' ]);
app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider.when("/", {
		templateUrl : "demo/album.html",
		controller : "indexCtrl"

	}).when("/singer", {
		templateUrl : "demo/singer.html",
		controller : "indexCtrl"

	}).when("/song", {
		templateUrl : "demo/song.html",
		controller : "indexCtrl"

	}).when("/genre", {
		templateUrl : "demo/genre.html",
		controller : "indexCtrl"

	})
	.when("/detail/:id", {
		templateUrl : "demo/detail.html",
		controller : "indexCtrl"

	}).when("/detailSong/:id", {
		templateUrl : "demo/detailSong.html",
		controller : "indexCtrl"

	})
	.when("/detailSinger/:id", {
		templateUrl : "demo/detailSinger.html",
		controller : "indexCtrl"

	}).when("/search", {
		templateUrl : "demo/search.html",
		controller : "indexCtrl"

	}).
	when("/register", {
		templateUrl : "demo/register.html",
		controller : "indexCtrl"

	}).
	when("/favorite", {
		templateUrl : "user/favorite.html",
		controller : "indexCtrl"

	})

});