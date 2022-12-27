const container = document.querySelector('#container');
const button = document.querySelector('button');
let isFirstGrid = true;
createDivGrid(16);
let gridItems = document.querySelectorAll('.grid-item');
highlightItems();
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }
  
  function randomColor() {
    return (
      "rgb(" +
      random(0, 255) +
      ", " +
      random(0, 255) +
      ", " +
      random(0, 255) +
      ")"
    );
  }
function highlightItems(){
gridItems.forEach(gridItem => {
    gridItem.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = randomColor();
    });
});
}

function createDivGrid(amount, isFirstGrid) {
for (let i = 1; i <= (amount * amount); i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
    div.style.height = `${100/amount}%`;
    div.style.width = `${100/amount}%`;
}
}


button.addEventListener('click', () => {
    gridItems.forEach(gridItem => {
        gridItem.remove();
    });
    amount = prompt('Enter the number of squares that you want for the new grid:');
    isFirstGrid = false;
    createDivGrid(amount, isFirstGrid);
    gridItems = document.querySelectorAll('.grid-item');
    highlightItems();

})