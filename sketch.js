const gridContainer = document.getElementById('grid-container');
const grid = document.getElementById('grid');

function createGrid() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        for (let j = 0; j < 16; j++) {
            let column = document.createElement('div');
            column.classList.add('cell');
            row.append(column);
        }
        grid.append(row);
    }
}

createGrid();