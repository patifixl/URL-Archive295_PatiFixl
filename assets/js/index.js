const fourthChild = document.querySelector(".column:nth-child(4)");
const fifthChild = document.querySelector(".column:nth-child(5)");
const sixthChild = document.querySelector(".column:nth-child(6)");
const seventhChild = document.querySelector(".column:nth-child(7)");
const eighthChild = document.querySelector(".column:nth-child(8)");

const gridItems = fifthChild.querySelectorAll(".grid-item");
const gridItemsOne = fourthChild.querySelectorAll(".grid-item-one");
const gridItemsThree = sixthChild.querySelectorAll(".grid-item-three");
const gridItemsFour = seventhChild.querySelectorAll(".grid-item-four");
const gridItemsFive = eighthChild.querySelectorAll(".grid-item-five");

let isWide = false;

const strzalka = fifthChild.querySelector(".strzalka");
const arrow = fourthChild.querySelector(".arrow");
const strzaleczka = sixthChild.querySelector(".strzaleczka");
const pfeil = seventhChild.querySelector(".pfeil");
const pfeilchen = eighthChild.querySelector(".pfeilchen");

// Function to toggle column and change the text
function toggleColumna() {
  if (isWide) {
    fourthChild.style.flex = "0 0 6vw"; // Close the column
    gridItemsOne.forEach((item) => (item.style.display = "none")); // Hide all grid-items
    arrow.textContent = ">"; // Change text to '>'
  } else {
    fourthChild.style.flex = "0 0 310vw"; // Open the column
    gridItemsOne.forEach((item) => (item.style.display = "block")); // Show all grid-items
    arrow.textContent = "<"; // Change text to '<'
  }
  isWide = !isWide; // Toggle the state
}

// Function to toggle column and change the text
function toggleColumn() {
  if (isWide) {
    fifthChild.style.flex = "0 0 6vw"; // Close the column
    gridItems.forEach((item) => (item.style.display = "none")); // Hide all grid-items
    strzalka.textContent = ">"; // Change text to '>'
  } else {
    fifthChild.style.flex = "0 0 310vw"; // Open the column
    gridItems.forEach((item) => (item.style.display = "block")); // Show all grid-items
    strzalka.textContent = "<"; // Change text to '<'
  }
  isWide = !isWide; // Toggle the state
}

function toggleColumnc() {
  if (isWide) {
    sixthChild.style.flex = "0 0 6vw"; // Close the column
    gridItemsThree.forEach((item) => (item.style.display = "none")); // Hide all grid-items
    strzaleczka.textContent = ">"; // Change text to '>'
  } else {
    sixthChild.style.flex = "0 0 310vw"; // Open the column
    gridItemsThree.forEach((item) => (item.style.display = "block")); // Show all grid-items
    strzaleczka.textContent = "<"; // Change text to '<'
  }
  isWide = !isWide; // Toggle the state
}

function toggleColumnd() {
  if (isWide) {
    seventhChild.style.flex = "0 0 6vw"; // Close the column
    gridItemsFour.forEach((item) => (item.style.display = "none")); // Hide all grid-items
    pfeil.textContent = ">"; // Change text to '>'
  } else {
    seventhChild.style.flex = "0 0 310vw"; // Open the column
    gridItemsFour.forEach((item) => (item.style.display = "block")); // Show all grid-items
    pfeil.textContent = "<"; // Change text to '<'
  }
  isWide = !isWide; // Toggle the state
}

function toggleColumne() {
  if (isWide) {
    eighthChild.style.flex = "0 0 6vw"; // Close the column
    gridItemsFive.forEach((item) => (item.style.display = "none")); // Hide all grid-items
    pfeilchen.textContent = ">"; // Change text to '>'
  } else {
    eighthChild.style.flex = "0 0 310vw"; // Open the column
    gridItemsFive.forEach((item) => (item.style.display = "block")); // Show all grid-items
    pfeilchen.textContent = "<"; // Change text to '<'
  }
  isWide = !isWide; // Toggle the state
}

// Hide grid-items by default (on page load)
gridItems.forEach((item) => (item.style.display = "none"));
gridItemsOne.forEach((item) => (item.style.display = "none"));
gridItemsThree.forEach((item) => (item.style.display = "none"));
gridItemsFour.forEach((item) => (item.style.display = "none"));
gridItemsFive.forEach((item) => (item.style.display = "none"));

// Add a click event listener to .strzalka
strzalka.addEventListener("click", toggleColumn);
arrow.addEventListener("click", toggleColumna);
strzaleczka.addEventListener("click", toggleColumnc);
pfeil.addEventListener("click", toggleColumnd);
pfeilchen.addEventListener("click", toggleColumne);
