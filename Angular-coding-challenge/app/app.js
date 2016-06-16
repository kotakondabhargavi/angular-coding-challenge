(function(){
    'use strict';

    angular.module('main', ['ngRoute', 'ngTable'])
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                    when('/', {
                        templateUrl: 'views/intro/overview.html',
                        controller: 'introController',
                        controllerAs: 'vm'
                    });
            }])
        .controller('introController', function($scope,Auth,NgTableParams){
            var self = this;
			$scope.postData={};
		
		Auth.getData()
		    .success(function (post) {
				
			
				$scope.postData=post.data;
					
			
			self.tableParams = new NgTableParams({ count: 5}, { counts: [5, 10, 25], dataset: post});
		    })
		    .error(function (error) {
			
		       $scope.errorMsg = 'Something went Wrong!! Please try again';
		    });
		
        })
	.factory('Auth',['$http',function ($http){
	    var user;
	    var service = "http://jsonplaceholder.typicode.com/posts";
	    var obj = {};

	    obj.getData = function(){
		return $http({
		    method: 'GET',
		    url: service,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		 });
	    };

	    return obj;
	}]);
})();
