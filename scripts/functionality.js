function makeGrid() {
  let container = document.querySelector("#container");

  for (let i = 0; i < 16; i++) {
    let row = document.createElement("div")
    row.id = "row"
    row.style.display = "flex";
    row.style.border = 
    container.appendChild(row);

    for (let x = 0; x < 16; x++) {
      let cell = document.createElement("div")
      cell.id = "cell";
      cell.style.width = "30px";
      cell.style.height = "30px";
      cell.style.border = "red, 1px, solid";
      row.appendChild(cell);
    }
  }
}

makeGrid();



