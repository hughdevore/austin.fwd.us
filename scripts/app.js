angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('home', {
		url:'/home',
		templateUrl: "templates/home.html",
		controller: "homeCtrl"
	})
	.state('tweet', {
		url:'/tweet',
		templateUrl: "templates/twitterPage.html",
		controller: "tweetCtrl"
	})
	.state('success', {
		url:'/success',
		templateUrl: "templates/successPage.html",
		controller: "successCtrl"
	});

	$urlRouterProvider.otherwise('/home');
});