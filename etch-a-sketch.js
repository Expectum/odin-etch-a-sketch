const container = document.querySelector('#container');
const button = document.querySelector('button');
createDivGrid();
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(gridItem => {
    gridItem.addEventListener("mouseover", (e) => {
        highlight(gridItem)
    });
});

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