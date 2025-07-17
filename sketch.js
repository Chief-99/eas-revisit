const gridContainer = document.querySelector('#grid-container');

function createGrid() {
    for (let i = 0; i <= 16; i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        
        
        
        gridContainer.append(row);
    }
}

createGrid();