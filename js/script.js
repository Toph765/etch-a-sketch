let color = '#080202';
let input = document.querySelectorAll(".input");
let slider = document.querySelector(".slider")
let mouseDown = false;

window.addEventListener("mousedown", () => mouseDown = true);
window.addEventListener("mouseup", () => mouseDown = false);
input.forEach(input => input.innerHTML = slider.value);

createGrid(16);

function createGrid(size) {
  let gridBox = document.querySelector(".gridBox");
  let square = gridBox.querySelectorAll('div');
  square.forEach(div => div.remove());
  gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i <= `${size**2}`; i++) {
    let pixel = document.createElement('div');
    pixel.addEventListener("mousedown", colorGrid);
    pixel.addEventListener("mousemove", colorGrid);  
    pixel.className = 'pixel';
    gridBox.appendChild(pixel);
  }
}

slider.oninput = function() {
  input.forEach(input => input.innerHTML = this.value);
};

function changeSize(input) { 
  createGrid(input);
}

function colorGrid(e) {
  if (e.type === "mousemove" && !mouseDown) return;
  if (color === "random") {
    e.target.style.backgroundColor = `hsl(${Math.random()*360}, 80%, 50%)`;
  } else {
    e.target.style.backgroundColor = color;
  }
}

function changeColor(change) {
  color = change;
}

function clearGrid() {
  let gridBox = document.querySelector(".gridBox");
  let square = gridBox.querySelectorAll('div');
  square.forEach(div => div.style.backgroundColor = 'white');
}