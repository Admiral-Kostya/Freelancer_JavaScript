"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const parentElement = document.querySelector(".parent-block");
  let arrayOfWishes = [
    "The end of russia existence",
    "IPhone 15 ProMax",
    "Toyota Corolla 2024",
    "Mac Book Pro 2024",
    "World Wide trip",
    "Cappucino",
    "Baked Salmon",
  ];
  function showRandomWishes(array, qtyOfWishes) {
    let copyOfArray = JSON.parse(JSON.stringify(array));
    let getRandomListOf3Wishes = [];
    for (let i = 0; i < qtyOfWishes; i++) {
      let randomIndex = Math.floor(Math.random() * copyOfArray.length);
      let randomWish = copyOfArray[randomIndex];
      getRandomListOf3Wishes.push(randomWish);
      copyOfArray.splice(randomIndex, 1);
    }
    return getRandomListOf3Wishes;
  }
  let resultArrayOfWishes = showRandomWishes(arrayOfWishes, 3);
  function createWishList(array, parent) {
    for (let i = 0; i < array.length; i++) {
      const divForWish = document.createElement("div");
      divForWish.innerText = array[i];
      parent.append(divForWish);
    }
  }
  createWishList(resultArrayOfWishes, parentElement);
});
