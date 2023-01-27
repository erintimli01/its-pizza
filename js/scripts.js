function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function(size) {
  const priceBySize = 0
    if (size === "large") {
      return 20;
  } else if (size === "medium") {
      return 15;
  } else {
      return 10;
  }
}