const gridContainer = document.getElementById('grid-container');
const grid = document.getElementById('grid');
const gridSizeButton = document.getElementById('grid-size-button');

let squaresPerSide = 16;

function createGrid() {
    for (let i = 0; i < squaresPerSide; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < squaresPerSide; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.background = 'hsla(360, 100%, 100%, 1)';
            row.append(cell);
        }
        grid.append(row);

        cellEventListeners()
    }
}

function cellEventListeners() {
    const allCells = document.querySelectorAll('.cell');
    allCells.forEach((cell) => {
        cell.addEventListener('mouseenter', handleCellHover);
    });
}

function handleCellHover(event) {
    let target = event.target;
    target.style.backgroundColor = 'hsla(0, 0%, 0%, 1)';
}

createGrid();