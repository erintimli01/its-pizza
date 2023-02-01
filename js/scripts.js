//Business Logic-----



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
  return priceBySize;
}



Pizza.prototype.orderSelections = function() {
  return this.size + " " + this.toppings
}

//Pizza.prototype.pizzaSize(orderSize) {
//this.size[orderSize.size] = orderSize.id
//}

//Pizza.prototype.pizzaToppings = function(toppings) {
//}


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

//User Interface Logic


function handleFormSubmission(event){
  event.preventDefault();
  const usersPizzaSize = document.querySelector("select#pizza-size-form").value;
  //const usersPizzaToppings = document.querySelector("div#pizza-toppings").value;
  const usersPizzaToppings = document.querySelectorAll("input[name='toppings']:checked").value;
  let newPizza = new Pizza(usersPizzaSize, usersPizzaToppings);
  //let toppings = newPizza.allToppings();
  let usersReceipt = document.getElementById("usersOrder");
  let usersSizeReceipt = document.getElementById("usersSize");
  let usersToppingsReceipt = document.getElementById("usersToppings");
  let usersPriceReceipt = document.getElementById("usersPrice");
  let receiptTotal = newPizza.pizzaPrice();
  usersSizeReceipt.innerText = newPizza.size;
  usersToppingsReceipt.innerText = newPizza.toppings;
  receiptTotal.innerText = receiptTotal;
  usersOrder.removeAttribute("class");
}

window.addEventListener("load", function() {
  document.getElementById("pizza-form").addEventListener("submit", handleFormSubmission);
});