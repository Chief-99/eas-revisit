const gridContainer = document.querySelector('#grid-container');

function createGrid() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        
        for (let j = 0; j < 16; j++) {
            let column = document.createElement('div');
            column.classList.add('column', 'cell');
            row.append(column);
        }
        gridContainer.append(row);

    }
}

createGrid();