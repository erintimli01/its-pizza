//Business Logic-----

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function(size) {
    if (this.size === "large") {
      priceBySize = 20;
  } else if (this.size === "medium") {
      priceBySize = 15;
  } else {
      priceBySize = 10;
  }
  return priceBySize;
}

//User Interface Logic

function handleFormSubmission(event){
  event.preventDefault();
    const usersPizzaSize = document.querySelector("select#pizza-size-form").value;

    let toppingArr = [];
    const usersPizzaToppings = document.querySelector("input[name='topping']:checked");
    for (let i=0; i < toppingArr.length; i++) {
      if (usersPizzaToppings[i].checked) {
        toppingArr.push(usersPizzaToppings[i].id)
        
      }
      return toppingArr;
    };
    
    let newPizza = new Pizza(usersPizzaSize, toppingArr);
    let usersReceipt = document.getElementById("usersOrder");
    let usersSizeReceipt = document.getElementById("usersSize");
    let usersToppingsReceipt = document.getElementById("usersToppings");
    let usersPriceReceipt = document.getElementById("usersPrice");
    let receiptTotal = newPizza.pizzaPrice();
    usersSizeReceipt.innerText = newPizza.size;
    usersToppingsReceipt.innerText = newPizza.toppings.join(", ");
    usersPrice.innerText = receiptTotal;
    usersOrder.removeAttribute("class");
  }

window.addEventListener("load", function() {
  document.getElementById("pizza-form").addEventListener("submit", handleFormSubmission);
})

