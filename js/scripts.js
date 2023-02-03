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

// let inputTopping = 0;
//   const pizzaToppings = document.getElemementById("pizza-toppings");
//   for (let i=0; i < pizzaToppings.length; ++i) {
//       if (pizzaToppings[i].checked) {
//         inputTopping += parseInt(pizzaToppings[i].value);
//       }
//     }



//User Interface Logic

function handleFormSubmission(event){
  event.preventDefault();
    const usersPizzaSize = document.querySelector("select#pizza-size-form").value;
    //const usersPizzaToppings = document.querySelector("div#pizza-toppings").value;
    //const usersPizzaToppings = document.querySelectorAll("input[name='topping']:checked"); 
    //const usersPizzaToppings = document.querySelectorAll("input[type=checkbox]:checked").value;
    let inputTopping = 0;
    const usersPizzaToppings = document.getElementsByClassName('pizza-toppings');
    for (let i=0; i < usersPizzaToppings.length; ++i) {
      if (usersPizzaToppings[i].checked) {
        inputTopping += parseInt(usersPizzaToppings[i].value);
      }
    }

    let newPizza = new Pizza(usersPizzaSize, usersPizzaToppings);
    let usersReceipt = document.getElementById("usersOrder");
    let usersSizeReceipt = document.getElementById("usersSize");
    let usersToppingsReceipt = document.getElementById("usersToppings");
    let usersPriceReceipt = document.getElementById("usersPrice");
    let receiptTotal = newPizza.pizzaPrice();
    usersSizeReceipt.innerText = newPizza.size;
    usersToppingsReceipt.innerText = newPizza.toppings;
    usersPrice.innerText = receiptTotal;
    usersOrder.removeAttribute("class");
  }


  // let inputTopping = [];
  // let toppingList = document.querySelectorAll("input[type=checkbox]:checked");
  // for (let i=0; i < toppingList.length; ++i) {
  //   if (toppingList[i].checked) {
  //     inputTopping += parseInt(toppingList[i].value);
  //   }
  // }


  



window.addEventListener("load", function() {
  document.getElementById("pizza-form").addEventListener("submit", handleFormSubmission);
})

