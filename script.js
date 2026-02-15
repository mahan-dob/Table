
let rows = document.querySelectorAll("table tbody tr");

for (let i = 0; i < rows.length; i++) {
  let cell = rows[i].children[i];
  if (cell) {
    cell.style.background = "#1c1c1c66";
  }
}

