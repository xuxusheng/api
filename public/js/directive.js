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

app.directive("listBox", function() {
    return {
        restrict: 'E',
        templateUrl: '/tpl/directive/list-box/index.html',
        scope: {
            val: '='
        }
    }
});

app.directive("prettyJson", function() {
    return {
        restrict: 'E',
        templateUrl: '/tpl/directive/pretty-json/index.html',
        scope: {
            data: '='
        },
        link: function(scope, element, attrs) {
            $(element).css({
                "font-family": "consolas"
            });
            new PrettyJSON.view.Node({
                el: $(element),
                data: scope.data
            }).expandAll();
        }
    }
});