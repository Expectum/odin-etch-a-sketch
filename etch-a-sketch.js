const container = document.querySelector('#container');
createDivGrid();
const gridItems = document.querySelectorAll('.grid-item');


function createDivGrid() {
for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
}
}

function highlight(item) {
    item.classList.add('highlight');
}