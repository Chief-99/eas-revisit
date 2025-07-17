const gridContainer = document.querySelector('#grid-container');

function createGrid() {
    for (let i = 0; i <= 16; i++) {
        let row = document.createElement('div');
        
        for (let j = 0; j <= 16; j++) {
            let column = document.createElement('div');
            row.append(column);
        }
        
        gridContainer.append(row);
    }
}