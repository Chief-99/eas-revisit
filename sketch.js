const gridContainer = document.getElementById('grid-container');
const gridSizeButton = document.getElementById('grid-size-button');
const clearButton = document.getElementById('clear-button');
let squaresPerSide = 16;

function createGrid(squaresValue) {
    const existingGrid = document.getElementById('grid');

    if (existingGrid) {
        gridContainer.removeChild(existingGrid);
    }

    const grid = document.createElement('div');
    grid.id = 'grid';
    gridContainer.append(grid);

    for (let i = 0; i < squaresValue; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < squaresValue; j++) {
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

function getGridSize() {
    squaresPerSide = prompt('Enter number of squares per side:', '');

    if (squaresPerSide === null) {
        return;
    } else if (isNaN(squaresPerSide)) {
        alert('Please enter a valid number!')
        return;
    } else if (squaresPerSide < 1 || squaresPerSide > 100) {
        alert('Please enter a number between 1 and 100!');
        return;
    }
    createGrid(squaresPerSide);
}

gridSizeButton.addEventListener('click', getGridSize)

createGrid(squaresPerSide);