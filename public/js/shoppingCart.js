//shoppingCart

function shoppingCart(cartName){
	this.cartName = cartName;
	this.clearCart = false;
	this.checkoutParameters = {};
	this.items = [];

	//load items from local storage when initializing 
	this.loadItems();

	//save items to local storage when unloading 
	var self = this;
	$(window).unload(function(){
		if(self.clearCart){
			self.clearItems();
		}
		self.saveItems();
		self.clearCart = false;
	});

}

//load items from local storage
shoppingCart.prototype.loadItems=function(){

	//localStorage = null;
	//console.log('in loadItems made local storage'+localStorage);
	var items = localStorage != null?localStorage[this.cartName+"_items"]:null;
	if (items!=null&&JSON!=null) {
		//load items into an array and push it onto cartItem
		try{
			var items = JSON.parse(items);
			console.log('inside sc.js loadItems , parsed items'+items);
			for(var i=0;i<items.length;i++){
				var item = items[i];
				if (item.sku!=null && item.name != null && item.price !=null && item.quantity!=null){
					console.log('inside sc.js loadItems ,putting item in cartItem');
					item = new cartItem(item.sku,item.name,item.price,item.quantity);
					this.items.push(item);
				}
			}
		}
		catch(err){
			//ignore errors while loading
		}
	}
}

//save items to local storage
shoppingCart.prototype.saveItems = function(){
	console.log('inside shoppingCart.js saveItems');
	if(localStorage != null&&JSON!=null){
		console.log('inside shoppingCart.js saveItems localStorage is not null');
		localStorage[this.cartName+"_items"] = JSON.stringify(this.items);
	}
}

// adds an item to the cart
shoppingCart.prototype.addItem =function (sku,name,price,quantity) {
	console.log('inside add items'+this);
	quantity = Number(quantity);
	if(quantity!=0){

		//update quantity of an existing item
		var found=false;
		for(var i =0;i<this.items.length && !found; i++){
			var item = this.items[i];
			console.log('update item in sc.js item is'+item.sku);
			if(item.sku==sku){
				found=true;
				item.quantity = Number(item.quantity+quantity);
				if(item.quantity<=0){
					this.items.splice(i,1);
				}
			}

		}
		//new item ,add now
		if(!found){
			console.log('add new item');
			var item = new cartItem(sku,name,price,quantity);
			this.items.push(item);
		}

		//save changes
		this.saveItems();

	}
}	

//get the total price for all items currently in cart


//get total count of all items in the cart
shoppingCart.prototype.getTotalCount= function(sku){
	var count = 0;
	for(var i=0;i<this.items.length;i++){
		var item = this.items[i];
			if(sku==null||item.sku==sku){
				count+=this.toNumber(item.quantity);
			}
	}
	return count;
}

// get total price count 
shoppingCart.prototype.getTotalPrice= function(sku){
	var totalPrice = 0;
	for(var i=0;i<this.items.length;i++){
		var item = this.items[i];
			if(sku==null||item.sku==sku){
				totalPrice+=this.toNumber(item.quantity*item.price);

			}
	}
	return totalPrice;
}

//clear the cart
shoppingCart.prototype.clearItems = function(){

	this.items = [];
	this.saveItems();

}

//define the checkout parameters addCheckoutParameters

//checkout using paypal

//checkout using google wallet

//checking if value is number 
shoppingCart.prototype.toNumber = function(value){
	value = value*1;
	return isNaN(value)? 0 : value;
}
//checkout parameter 

//items in cart
function cartItem(sku,name,price,quantity){
	this.sku = sku;
	this.name = name;
	this.price = price*1;
	this.quantity = quantity*1;
}