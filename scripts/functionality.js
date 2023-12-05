let gridSize = document.querySelector("#gridSize");
let setGridSize = document.querySelector("#setGridSize");
let size;
let cellSize;
let gridBorder = 480;

let cells = [];

function makeGrid() {
  let container = document.querySelector("#container");
  let isMouseDown = false;

  container.innerHTML = '';

  container.addEventListener("mousedown", function() {
    isMouseDown = true;
  });

  container.addEventListener("mouseup", function() {
    isMouseDown = false;
  });

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div")
    row.id = "row" + i;
    row.style.display = "flex";
    container.appendChild(row);

    for (let x = 0; x < size; x++) {
      let cell = document.createElement("div")
      cell.id = "cell" + i + "-" + x;
      cell.style.width = cellSize + "px";
      cell.style.height = cellSize + "px";
      cell.addEventListener("mouseover", function() {
        if (isMouseDown) {
          cell.style.backgroundColor = "blue"
        }
      });
      row.appendChild(cell);
      cells.push(cell);
    }
  }
}

setGridSize.addEventListener('click', function() {
  size = Number(gridSize.value);
  cellSize = gridBorder / size;
  makeGrid();
  return cellSize;
});



let clear = document.querySelector("#clear")

clear.onclick = function() {
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  })
};
