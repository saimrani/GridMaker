let colorSelected = '#ffffff';

// Adds a row
function addR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    let row = document.createElement("tr");
    let numCols = rows.length > 0 ? rows[0].childElementCount : 1;

    for (let i = 0; i < numCols; i++) {
        let col = document.createElement("td");
        col.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
    }

    grid.appendChild(row);
}

// Adds a column
function addC() {
    let rows = document.getElementsByTagName("tr");

    if (rows.length === 0) {
        addR();
        return;
    }

    for (let i = 0; i < rows.length; i++) {
        let col = document.createElement("td");
        col.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
        rows[i].appendChild(col);
    }
}

// Removes a row
function removeR() {
    let grid = document.getElementById("grid");
    if (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    } else {
        alert("No rows to remove");
    }
}

// Removes a column
function removeC() {
    let rows = document.getElementsByTagName("tr");

    if (rows.length === 0 || rows[0].childElementCount === 0) {
        alert("No columns to remove");
        return;
    }

    for (let i = 0; i < rows.length; i++) {
        rows[i].removeChild(rows[i].lastElementChild);
    }

    if (rows[0].childElementCount === 0) {
        document.getElementById("grid").innerHTML = "";
    }
}

// Sets global variable for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
}

// Fills all cells with the selected color
function fill() {
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected;
    }
}

// Clears all cells
function clearAll() {
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
    }
}

// Fills only uncolored cells with the selected color
function fillU() {
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor === "" || cells[i].style.backgroundColor === "white") {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}