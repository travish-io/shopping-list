// shopping list
const groceryList = [
  {
    id: 1,
    name: "milk",
    type: "whole",
    price: 4.99,
  },
  {
    id: 2,
    name: "cereal",
    type: "cheerios",
    price: 3.99,
  },
  {
    id: 3,
    name: "cheese",
    type: "kerigold cheddar",
    price: 6.99,
  },
  {
    id: 4,
    name: "coffee",
    type: "BRCC",
    price: 40.99,
  },
  {
    id: 6,
    name: "coffee creamer",
    type: "natural bliss sweet cream",
    price: 6.19,
  },
];

// Write a function named addToShoppingList that will add a new grocery item to your array. The function should add an id property to the grocery object that you provide as an argument when the function is invoked.

const addToList = (name) => {
  let newItem = {};
  // add unique ID
  const lastIndex = groceryList.length - 1;
  const currentLastItem = groceryList[lastIndex];
  const maxId = currentLastItem.id;
  const newId = maxId + 1;
  newItem.id = newId;
  newItem.name = name;
  newItem.dateCreated = Date();
  newItem.price = Math.round(Math.random() * (16 - 4) + 4);
  groceryList.push(newItem);
};

addToList("bacon");
addToList("pubSub");
addToList("iceCream");

console.log(groceryList);
