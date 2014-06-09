angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
//console.log($location.path);
console.log($routeProvider.route);
	//$locationProvider.html5Mode(true); //it causes %2F in route 
	$routeProvider
		.when('/store',{templateUrl:'partials/store',controller:'storeController'})
		.when('/products/:productSku',{templateUrl:'partials/product',controller:'storeController'})
		.when('/cart',{templateUrl:'partials/cart',controller:'storeController'})
		.otherwise({templateUrl:'partials/store',controller:'storeController'})
		
}]);

angular.module('app').controller('mainCtrl',function($scope){
	$scope.myVar ="helo from angular";
});