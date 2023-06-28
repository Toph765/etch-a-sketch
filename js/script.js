let color = 'black';
let click = true;
window.addEventListener("mousedown", () => click = true);
window.addEventListener("mouseup", () => click = true);

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

function changeSize(input) {
  if (input > 100) {
    return alert("You can't have more than 100!");
  }
  else if (input < 2) {
    return alert("That's too little!");
  }
  createGrid(input);
}

function changeBtn() {
  changeSize();
}

function colorGrid() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
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