const gridContainer = document.querySelector('#grid-container');
const gridSizeButton = document.querySelector('#grid-size-button');

function createGrid() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        
        for (let j = 0; j < 16; j++) {
            let column = document.createElement('div');
            column.classList.add('cell');
            row.append(column);
        }
        gridContainer.append(row);
        
    }
    
}


createGrid();

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseenter', fillCells)
})

function fillCells(event) {
    let cell = event.target;
    cell.style.background = 'black';
}