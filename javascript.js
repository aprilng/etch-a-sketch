const inputField = document.getElementById("inputField");
const button = document.querySelector("button");
const canvas = document.querySelector(".canvas");
const errorMessage = document.createElement("p");
errorMessage.style.color = "red";

inputField.addEventListener("input", () => {
  const inputValue = inputField.value.trim();

  button.disabled = inputValue === "" || isNaN(inputValue);
});

button.addEventListener("click", () => {
    const gridSize = parseInt(inputField.value);
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    const errorAlert = document.createElement("div");
    errorAlert.style.position = "fixed";
    errorAlert.style.top = "20px";
    errorAlert.style.left = "50%";
    errorAlert.style.transform = "translateX(-50%)";
    errorAlert.style.backgroundColor = "rgba(255, 86, 48, 1)";
    errorAlert.style.color = "white";
    errorAlert.style.padding = "10px";
    errorAlert.style.borderRadius = "5px";
    errorAlert.style.fontSize = "16px";
    errorAlert.style.zIndex = "1000";
    errorAlert.textContent = "Please enter a number between 1 and 100.";
    
    document.body.appendChild(errorAlert);

    setTimeout(() => {
      errorAlert.remove();
    }, 2000);

    return;
  }

  if (errorMessage.textContent) {
    errorMessage.textContent = "";
  }
  
// Clear the canvas before generating a new grid
canvas.innerHTML = "";
  
// Calculate the size of each square
const squareSize = 960 / gridSize;

// Set up the canvas to use CSS grid
canvas.style.display = "grid";
canvas.style.gridTemplateColumns = `repeat(${gridSize}, ${squareSize}px)`; // Create columns based on grid size
canvas.style.gridTemplateRows = `repeat(${gridSize}, ${squareSize}px)`; // Create rows based on grid size

// Create and append the squares
for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const square = document.createElement("div");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.style.backgroundColor = "#fff"; // Default square color
      square.style.border = "1px solid #ddd"; // Border for visibility
      square.style.position = "relative"; // Needed to position the color layer within the square
      canvas.appendChild(square);

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Random red value (0-255)
  const g = Math.floor(Math.random() * 256); // Random green value (0-255)
  const b = Math.floor(Math.random() * 256); // Random blue value (0-255)

  return `rgb(${r}, ${g}, ${b})`;
}
  
// Event listener for mouseenter (hover over)
square.addEventListener("mouseenter", () => {
    const colorLayer = document.createElement("div");
        colorLayer.style.position = "absolute";
        colorLayer.style.top = 0;
        colorLayer.style.left = 0;
        colorLayer.style.width = "100%";
        colorLayer.style.height = "100%";
        colorLayer.style.backgroundColor = getRandomColor();
        colorLayer.style.opacity = "0.1"; // 10% opacity
        square.appendChild(colorLayer);
      });
    }
  }
});