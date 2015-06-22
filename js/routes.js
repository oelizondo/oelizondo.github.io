app.config(['$routeProvider',
	function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/posts.html',
		controller: 'postCtrl'
	})
	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'aboutCtrl'
	})
	.otherwise({redirectTo: '/'});
}]);