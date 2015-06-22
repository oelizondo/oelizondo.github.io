app.controller('postCtrl', function($scope, $http){
	$http.get('data.json')
	.success(function(data){
		$scope.posts = data;
	})
	.error(function(data){
		console.log('error');
	});
});

app.controller('aboutCtrl', function($scope){});