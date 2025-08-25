// ----------------------------------------
// Part 1: Variables & Conditionals
// ----------------------------------------
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "You are an adult ";
  } else if (age > 0) {
    result.textContent = "You are a minor ";
  } else {
    result.textContent = "Please enter a valid age!";
  }
});

// ----------------------------------------
// Part 2: Functions (Reusability)
// ----------------------------------------

// Function 1: Calculate total of 3 numbers
function calculateTotal(a, b, c) {
  return a + b + c;
}

document.getElementById("totalBtn").addEventListener("click", () => {
  let total = calculateTotal(10, 20, 30);
  document.getElementById("totalResult").textContent = "Total is: " + total;
});

// Function 2: Toggle content visibility
function toggleContent() {
  let message = document.getElementById("toggleMessage");
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}

document.getElementById("toggleBtn").addEventListener("click", toggleContent);

// ----------------------------------------
// Part 3: Loops (for, while)
// ----------------------------------------

// Example 1: Countdown using for loop
document.getElementById("countdownBtn").addEventListener("click", () => {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old results

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// Example 2: Iterate through array
let fruits = [" Apple", " Banana", "Grapes", " Mango"];

document.getElementById("listBtn").addEventListener("click", () => {
  let fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = ""; // clear old results

  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });
});

// ----------------------------------------
// Part 4: DOM Manipulation
// ----------------------------------------

// Example 1: Change text dynamically
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.querySelector("h1").textContent = "Heading Changed Dynamically!";
});

// Example 2: Add new list item
document.getElementById("addItemBtn").addEventListener("click", () => {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});

// Example 3: Toggle class (bonus)
document.querySelector("body").addEventListener("dblclick", () => {
  document.body.classList.toggle("dark-mode");
});
