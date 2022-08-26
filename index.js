"use strict";

const canvas = document.querySelector(".canvas");

const submitBtn = document.querySelector(".submit");

function createGrid() {
  let gridHeight = document.querySelector(".height").value;
  let gridWidth = document.querySelector(".width").value;

  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild); //Resets grid, if its already there.
  }

  for (let i = 1; i < gridHeight; i++) {
    let gridRow = document.createElement("tr");
    canvas.appendChild(gridRow);

    for (let j = 1; j < gridWidth; j++) {
      let gridCell = document.createElement("td");
      gridRow.appendChild(gridCell);

      gridCell.addEventListener("mousedown", function () {
        this.style.backgroundColor = "red";
      });
    }
  }
}

createGrid();

submitBtn.addEventListener("click", createGrid);
