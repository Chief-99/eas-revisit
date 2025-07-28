const gridContainer = document.getElementById('grid-container');
const grid = document.getElementById('grid');

function createGrid() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 16; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.background = 'hsla(360, 100%, 100%, 1)';
            row.append(cell);
        }
        grid.append(row);
    }
}

function cellEventListeners() {
    const allCells = document.querySelectorAll('.cell');
    allCells.forEach('moouseenter', handleCellHover);
}

function handleCellHover(event) {
    let target = event.target;
    target.background = 'hsla()'
}

createGrid();