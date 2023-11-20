const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

const orderPizza = () => {
  const pizzaType = document.querySelector('input[name="pizzaType"]:checked');
  const pizzaQuantity = parseInt(
    document.getElementById("pizzaQuantity").value
  );

  if (pizzaType && checkOrderName(pizzaType.value)) {
    if (!isNaN(pizzaQuantity) && pizzaQuantity > 0) {
      const orderTotal = totalCost(pizzaQuantity);
      const orderCookingTime = cookingTime(pizzaQuantity);
      const response =
        "Great, I'll get started on your " +
        "<b>" +
        pizzaType.value +
        "</b>" +
        " right away." +
        "<br>" +
        "It will cost " +
        "<b>" +
        orderTotal +
        "</b>" +
        " kr." +
        "<br>" +
        "The pizzas will take " +
        "<b>" +
        orderCookingTime +
        "</b>" +
        " minutes.";
      document.getElementById("response").innerHTML = response;
    } else {
      document.getElementById("response").innerHTML =
        "<span style=color:red>Invalid quantity. Please enter a quantity.</span>";
    }
  } else {
    document.getElementById("response").innerHTML =
      "<span style=color:red>Please select a valid pizza from the menu.</span>";
  }
};

// Function to check if the pizza is on the menu
function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}
// Function to calculate the total cost
function totalCost(orderQuantity) {
  return Number(orderQuantity) * pizzaPrice;
}
// Function to calculate cooking time
function cookingTime(orderQuantity) {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}
