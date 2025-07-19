const gridContainer = document.querySelector('#grid-container');
const gridSizeButton = document.querySelector('#grid-size-button');
const randomButton = document.querySelector('#random-colours');
let grid = document.querySelector('#grid');
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
    
    function blackFill(event) {
        let cell = event.target;
        cell.style.background = 'black';
    }

    function randomFill(event) {
        let cell = event.target;
        let h = Math.floor(Math.random() * 360);
        let s = Math.floor(Math.random() * 100);
        let l = Math.floor(Math.random() * 100);
        let randomColour = `hsl(${h}, ${s}%, ${l}%)`;
        cell.style.background = randomColour;
    }
}


createGrid(squaresPerSide);

gridSizeButton.addEventListener('click', function() {
    squaresPerSide = Number(prompt('Enter number of squares per side:', ''));
    
    if (squaresPerSide > 100) {
        alert('Please enter a number less than 100');
        squaresPerSide = Number(prompt('Enter number of squares per side:', ''));
    }
    createGrid(squaresPerSide);
})
