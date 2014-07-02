// create a data service that provides a store and a shopping
// cart that will be shared by all views
// (instead of creating fresh ones for each view).
angular.module('app').factory('DataService',function(){
	var myStore = new store();

	//store class
	function store() {
		console.log('inside store() method');
	  this.products = [
<<<<<<< HEAD
	    new product("APL", "Apple", "Eat one every day and keep doctor away !!", 12, 90, 0, 2, 0, 1, 2),
	    new product("PCH", "Peach", "Wonderfully delicious peaches are low in calories(39 calories in 100 g) and contain no saturated fats. Nonetheless, they are packed with numerous health promoting compounds, minerals and vitamins", 16, 90, 0, 1, 1, 1, 2),
	    new product("BAN", "Banana", "These are powerhouse of energy and full of potassium", 4, 120, 0, 2, 1, 2, 2),
	    // more products…
	    new product("WML", "Watermelon", "Nothing is as refreshing as a watermelon of a hot sunny day", 4, 90, 4, 4, 0, 1, 1)
=======
	    new product("APL", "Apple", "Eat one every…", 12, 90, 0, 2, 0, 1, 2),
	    new product("PCH", "Avocado", "Guacamole…", 16, 90, 0, 1, 1, 1, 2),
	    new product("BAN", "Banana", "These are…", 4, 120, 0, 2, 1, 2, 2),
	    // more products…
	    new product("WML", "Watermelon", "Nothing…", 4, 90, 4, 4, 0, 1, 1)
>>>>>>> 35e8bc66f719876cd6bf97c45f0597ddb3a8bf06
	  ];
	  this.dvaCaption = ["Negligible", "Low", "Average", "Good", "Great" ];
	  this.dvaRange = ["below 5%", "between 5 and 10%","above 40%"];
	}
	store.prototype.getProduct = function (sku) {
	  for (var i = 0; i < this.products.length; i++) {
	    if (this.products[i].sku == sku)
	      return this.products[i];
	  }
	  return null;
	}

// product class
function product(sku, name, description, price,
                 cal, carot, vitc, folate, potassium, fiber) {
  this.sku = sku; // product code (SKU = stock keeping unit)
  this.name = name;
  this.description = description;
  this.price = price;
  this.cal = cal;
  this.nutrients = {
    "Carotenoid": carot,
    "Vitamin C": vitc,
    "Folates": folate,
    "Potassium": potassium,
    "Fiber": fiber
  };
}

var myCart = new shoppingCart("AngularStore");
//var myCart = "AngularStore";

	return{
		store:myStore,
		cart:myCart
	};
});