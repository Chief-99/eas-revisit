const gridContainer = document.querySelector('#grid-container');
const gridSizeButton = document.querySelector
('#grid-size-button');
let squaresPerSide = 16;

function createGrid() {
    for (let i = 0; i < squaresPerSide; i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        
        for (let j = 0; j < squaresPerSide; j++) {
            let column = document.createElement('div');
            column.classList.add('cell');
            row.append(column);
        }
        gridContainer.append(row);
        
    }
    
}


createGrid();

gridSizeButton.addEventListener('click', function() {
    squaresPerSide = Number(prompt('Enter number of squares per side:', ''));
    createGrid();
})

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseenter', fillCells)
})

function fillCells(event) {
    let cell = event.target;
    cell.style.background = 'black';
}