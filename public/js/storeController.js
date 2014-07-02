angular.module('app').controller('storeController',function($scope,$routeParams,DataService){
	
	//get store and cart from service
	$scope.store = DataService.store;
	console.log('store data is ');
	$scope.cart = DataService.cart;

	//use routing to pick the selected product
	if($routeParams.productSku!=null){
		$scope.product = $scope.store.getProduct($routeParams.productSku);
	}

});