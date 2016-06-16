


describe('DefinationTestCases', function () {
		
	beforeEach(angular.mock.module('main'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

	describe('postData Variable Defination testcase', function () {
		it('should declared', function () {
			var $scope = {};
			var controller = $controller('introController', { $scope: $scope });
			
			expect($scope.postData).toBeDefined(true);
		});	
		it('self varible declartion', function () {
			var $scope = {};
			var controller = $controller('introController', { $scope: $scope });
			
			expect(self).toBeDefined(true);
		});	
		it('self table params before call the service', function () {
			var $scope = {};
			var controller = $controller('introController', { $scope: $scope });
			
			expect(self.length).toBe(0);
		});	
		
	});

});