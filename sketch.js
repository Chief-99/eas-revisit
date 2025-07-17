const gridContainer = document.querySelector('#grid-container');
let grid = document.querySelector('#grid');
const gridSizeButton = document.querySelector
('#grid-size-button');
let squaresPerSide = 16;

function createGrid(squares) {
    if (grid.hasChildNodes()) {
        grid.remove();
        grid = document.createElement('div');
        grid.id = 'grid';
    }
    for (let i = 0; i < squares; i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        
        for (let j = 0; j < squares; j++) {
            let column = document.createElement('div');
            column.classList.add('cell');
            row.append(column);
        }
        grid.append(row);  
    }

    gridContainer.appendChild(grid);
    
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', fillCells)
    })
    
    function fillCells(event) {
        let cell = event.target;
        cell.style.background = 'black';
    }
}


createGrid(squaresPerSide);

gridSizeButton.addEventListener('click', function() {
    squaresPerSide = Number(prompt('Enter number of squares per side:', ''));
    createGrid(squaresPerSide);
})
