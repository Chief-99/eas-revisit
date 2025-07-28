const gridContainer = document.getElementById('grid-container');
const gridSizeButton = document.getElementById('grid-size-button');
const clearButton = document.getElementById('clear-button');
const randomButton = document.getElementById('random-colours-button');
let squaresPerSide = 16;
const flags = {
    blackFlag: true,
}

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
            cell.style.backgroundColor = 'rgba(255, 255, 255, 1)';
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
    let h = Math.floor(Math.random() * 255);
    let s = Math.floor(Math.random() * 255);
    let l = Math.floor(Math.random() * 255);

    if (flags.blackFlag) {
        target.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        target.style.backgroundColor = `rgba(${h}, ${s}, ${l}, 1)`;
    }
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

function clearCells() {
    let allCells = document.querySelectorAll('.cell');
    allCells.forEach((cell) => {
        cell.style.background = 'white';
    }) 
}

gridSizeButton.addEventListener('click', getGridSize);
clearButton.addEventListener('click', clearCells);
randomButton.addEventListener('click', () => {
    flags.blackFlag = !flags.blackFlag
    clearCells();
});

createGrid(squaresPerSide);