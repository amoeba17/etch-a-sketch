// constants
const SIZE = 400; // px
const grid = document.querySelector(".grid");
grid.style.width = SIZE + 'px';
grid.style.height = SIZE + 'px';

function randomRGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function colorCell() {
    this.style.background = randomRGB();
}

function populateGrid(sideLength) {
    const cellSize = SIZE/sideLength;
    grid.style.gridTemplateColumns = `repeat(${sideLength}, ${cellSize}px)`;
    grid.style.gridTemplateRows = `repeat(${sideLength}, ${cellSize}px)`;
    let cellCount = 1;
    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = `cell-${cellCount++}`;
            cell.addEventListener('mouseover', colorCell);
            grid.appendChild(cell);
        }
    }
}

function clearGrid() {
    let nCells;
    do {
        nCells = parseInt(prompt('How large? (between 5-100)'));
    } while (nCells < 5 || nCells > 100);
    populateGrid(nCells);
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.background = 'lightgrey';
    })
}

populateGrid(64);
clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener('click', clearGrid);
