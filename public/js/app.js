var app = angular.module('app', ['ui.router']);

app.run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 48;
}]);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/main");

	$stateProvider
		.state('main', {
			url: '/main',
			templateUrl: 'tpl/controller/main/index.html'
		})
		.state('list', {
			url: '/list',
			templateUrl: 'tpl/controller/list/index.html',
			controller: 'listCtrl'
		})
});