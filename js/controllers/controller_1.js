app.controller('MainCtrl', ['$scope', function($scope){
	$scope.title = 'Main Title',
	$scope.blogArt = [
		{
			name: 'Hello world',
			date: '26/05/2015',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi placeat rem, eaque, vel voluptatem iusto quidem quasi reprehenderit rerum quam temporibus. Quidem eligendi aut dolor nisi nostrum.'
		},
		{
			name: 'second',
			date: '26/05/2015',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi placeat rem, eaque, vel voluptatem iusto quidem quasi reprehenderit rerum quam temporibus. Quidem eligendi aut dolor nisi nostrum.'
		},
		{
			name: 'third',
			date: '26/05/2015',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi placeat rem, eaque, vel voluptatem iusto quidem quasi reprehenderit rerum quam temporibus. Quidem eligendi aut dolor nisi nostrum.'
		},
		{
			name: 'fourth',
			date: '26/05/2015',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi placeat rem, eaque, vel voluptatem iusto quidem quasi reprehenderit rerum quam temporibus. Quidem eligendi aut dolor nisi nostrum.'
		}
	]
}]);