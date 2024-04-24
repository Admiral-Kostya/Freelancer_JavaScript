"use strict";
function showTableWithRandomNumbers(
  rowNumbers = 3,
  colNumbers = 4,
  minValue = 1,
  maxValue = 100
) {
  const parent = document.querySelector(".parent-block");
  const tableEl = document.createElement("table");
  tableEl.classList.add("table");
  for (let r = 0; r < rowNumbers; r++) {
    const rowEl = document.createElement("tr");
    tableEl.append(rowEl);
    for (let c = 0; c < colNumbers; c++) {
      const colEl = document.createElement("td");
      colEl.classList.add("td");
      let randomNumber =
        minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
      colEl.innerText = randomNumber;
      rowEl.append(colEl);
    }
  }
  parent.append(tableEl);
}
showTableWithRandomNumbers();
