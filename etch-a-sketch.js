const container = document.querySelector('#container');
const button = document.querySelector('button');
createDivGrid(16);
let gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(gridItem => {
    gridItem.addEventListener("mouseover", (e) => {
        highlight(gridItem)
    });
});

function createDivGrid(amount) {
for (let i = 1; i <= (amount * amount); i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
}
}

function highlight(item) {
    item.classList.add('highlight');
}

button.addEventListener('click', () => {
    gridItems.forEach(gridItem => {
        gridItem.remove();
    });
    amount = prompt('Enter the number of squares that you want for the new grid:');
    createDivGrid(amount);
    gridItems = document.querySelectorAll('.grid-item');
})