const container = document.querySelector('#container');
const button = document.querySelector('button');
let darkenAmount = 25.5;
createDivGrid(16);
let gridItems = document.querySelectorAll('.grid-item');
highlightItems();

function createDivGrid(amount) {
for (let i = 1; i <= (amount * amount); i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
    div.style.height = `${100/amount}%`;
    div.style.width = `${100/amount}%`;
}
}

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

  function getLowestMiddleHighest(rgbIntArray) {
    let highest = {val:-1,index:-1};
    let lowest = {val:Infinity,index:-1};
    rgbIntArray.map((val,index)=>{
        if(val>highest.val){
          highest = {val:val,index:index};
        }
        if(val<lowest.val){
          lowest = {val:val,index:index};
        }
      });
      if(lowest.index===highest.index){
        lowest.index=highest.index+1;
      }
      let middle = {index: (3 - highest.index - lowest.index)};
      middle.val = rgbIntArray[middle.index];
      return [lowest,middle,highest];
    }    

function darkenByAmount(rgb, darkenAmount) {
    const rgbIntArray = rgb.replace(/ /g, '').slice(4, -1).split(',').map(e => parseInt(e));
    const [lowest,middle,highest]=getLowestMiddleHighest(rgbIntArray);
    if(highest.val===0){
        return rgb;
      }
    const returnArray = [];
    returnArray[highest.index] = highest.val-(Math.min(highest.val,darkenAmount));
    const decreaseFraction  =(highest.val-returnArray[highest.index])/ (highest.val);
    returnArray[middle.index]= middle.val -middle.val*decreaseFraction; 
    returnArray[lowest.index]= lowest.val -lowest.val*decreaseFraction;              
    return (`rgb(${returnArray.join()}) `);
    }

function highlightItems(){
    gridItems.forEach(gridItem => {
        gridItem.addEventListener("mouseover", (e) => {
            rgbString = randomColor();            
            e.target.style.backgroundColor = darkenByAmount(rgbString,darkenAmount);
            if (darkenAmount != 255) {
                darkenAmount += 25.5;
                }
        });
    });
  }
  
button.addEventListener('click', () => {
    gridItems.forEach(gridItem => {
        gridItem.remove();
    });
    amount = prompt('Enter the number of squares that you want for the new grid:');
    if (amount <= 100) {
        createDivGrid(amount);
    }  
    gridItems = document.querySelectorAll('.grid-item');
    highlightItems();
})