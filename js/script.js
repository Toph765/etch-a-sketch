const gridBox = document.querySelector(".gridBox");
const defaultSize = 36;

function makeRows(pixelNumber) {
  for (c = 0; c < (pixelNumber ** 2); c++) {
    let cell = document.createElement("div");
    gridBox.appendChild(cell).className = "pixel";
  };
};

makeRows(defaultSize);
