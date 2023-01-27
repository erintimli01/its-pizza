//function Pizza(pizzaToppings, pizzaSize) {
//this.pizzaSize = pizzaSize;
//this.pizzeToppings = pizzaToppings;
//}


function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function(size) {
    if (size === "large") {
      priceBySize = 20;
  } else if (size === "medium") {
      priceBySize = 15;
  } else {
      priceBySize = 10;
  }
}


Pizza.prototype.pizzaSize(orderSize) {
  this.size[orderSize.size] = orderSize.id
}

Pizza.prototype.pizzaToppings = function(toppings) {
}




///cant get this to work
//function Pizza(pizzaSize, pizzaToppings) {
//this.pizzaSize = size;
//this.pizzaToppings = toppings;
//}

//Pizza.prototype.pizzaPrice = function() {
// const priceBySize = 0
  //if (this.pizzaSize === "large") {
    //return this.priceBySize = 20;
  //} else if (this.pizzaSize === "medium") {
    //  return this.priceBySize = 15;
 // } else {
    //  return this.priceBySize = 10;
//  }
//}