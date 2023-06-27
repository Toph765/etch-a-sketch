function createGrid(size) {
  let gridBox = document.querySelector(".gridBox");
  let square = gridBox.querySelectorAll('div');
  square.forEach(div => div.remove());
  gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i <= `${size**2}`; i++) {
    let pixel = document.createElement('div');
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "black";
    })
    pixel.className = 'pixel';
    gridBox.appendChild(pixel);
  }
}

createGrid(16);

function changeSize(input) {
  if (input > 100) {
    return alert("You can't have more than 100!");
  }
  else if (input < 2) {
    return alert("That's too little!");
  }
  createGrid(input);
}
