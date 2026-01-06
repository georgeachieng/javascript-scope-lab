const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";


function addBurger() {
  const newBurger = "Flatburger"; 
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