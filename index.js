var burgers = ["Hamburger", "Cheeseburger"];
var featuredDrink = "Strawberry Milkshake";


function addBurger() {
  let newBurger = "Flatburger"; 
  burgers.push(newBurger);
}


addBurger();


if (true) {
  const anotherNewBurger = "Maple Bacon Burger"; 
  burgers.push(anotherNewBurger);

  function changeFeaturedDrink() {
    featuredDrink = "The JavaShake"; 
  }


  changeFeaturedDrink();
}

console.log("Burgers:", burgers);

console.log("Featured Drink:", featuredDrink);