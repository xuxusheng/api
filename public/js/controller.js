// body上绑定的控制器
app.controller('appCtrl', ['$scope', '$rootScope', '$location', '$anchorScroll', function($scope, $rootScope, $location, $anchorScroll) {

    // 页面锚点跳转函数 goto ( id )
    $scope.goto = function(id) {
        $location.hash(id);
        $anchorScroll();
    }
}]);

app.controller('listCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.nowData = {};

	// 向后端请求 API 数据，参数为将要请求的那一组API 的名字
	// 重构时 抽成service
	$scope.getList = function(str) {

		var url = 'getList' + '?name=' + str + '&' + new Date().getTime();
		console.log(url);
		$http({
			method: 'GET',
			url: url
		}).success(function(data, status, headers, config) {
			console.log(data);
			$scope.nowData.data = data;
		});
	};

    $scope.getSide = function() {

        var url = 'getSide' + '?' + new Date().getTime();
        $http({
            method: 'GET',
            url: url
        }).success(function(data, status, headers, config) {
            console.log(data);
            $scope.nowData.sideData = data;
        })
    };

	$scope.getList('card');
    $scope.getSide();


}]);

