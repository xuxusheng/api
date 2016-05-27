// directive 

app.directive("docBox", function() {
	return {
		restrict: 'A',
		templateUrl: '/tpl/directive/docBox/index.html'
	}
});

app.directive("side", function() {
    return {
        restrict: 'E',
        templateUrl: '/tpl/directive/side/index.html',
        scope: true,
        link: function(scope, element, attrs) {
        }
    }
});