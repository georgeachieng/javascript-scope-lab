// Write your solution in this file!
const burgers = ["Hamburger","Cheeseburger"];
    function addBurger() {
let newBurger = "Flatburger";
       burgers.push(newBurger);
        return newBurger;
    }
addBurger(); // Adds  "Flatburger"
let anotherNewBurger = "Maple Bacon Burger";
     if (anotherNewBurger === "Maple Bacon Burger"){
      console.log ("yummy");}
     else  {console.log ("not yummy")}
     burgers.push(anotherNewBurger);
     console.log(burgers);
     // ["Hamburger", "Cheeseburger", "Flatburger", "Maple Bacon Burger"]

const featuredDrinks = ["Strawberry","Milkshake"];
   function changeFeaturedDrink(Drinks) {
           Drinks[1] = "The Java Shake"; //Replace second item
         return Drinks;
   }
changeFeaturedDrink(featuredDrinks);

console.log(featuredDrinks);