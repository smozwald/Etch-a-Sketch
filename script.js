const gameContainer = document.querySelector("#game-container");
const reset = document.querySelector("#reset");
const colorMode = document.querySelector("#color-mode");
let width = 16;
let height = 16;
let newCell =[];
let cellID;
let cells;
//Backgroundstyle of 0 indicates black cells, 1 indicates random RGB.
let backgroundStyle = 0;

//Create divs for each sketch to be etched and build the board.
function createBoard(height, width) {
    cellHeight = 1/height*100;
    cellWidth = 1/width*100;
    for (let i = 0; i < width; i++) {
        newCell[i] = [];
        for (let j = 0; j < height; j++) {
            newCell[i][j] = document.createElement("div");
            newCell[i][j].classList.add("cell");
            newCell[i][j].style.height = cellHeight + '%';
            newCell[i][j].style.width = cellWidth + '%';
            cellID = `${i}-${j}`;
            newCell[i][j].setAttribute('id', cellID);
            gameContainer.appendChild(newCell[i][j]);
        }
    }
    cells = Array.from(gameContainer.childNodes).slice(1);
}

function startEtch() {
    cells.forEach(function(cell) {
        cell.addEventListener("mouseover", function(e) {
            cell.style.backgroundColor = getBackground();
        })
    });
}

//resets board, removing child cells and then creating new board.
function resetGame() {
    height = parseInt(prompt("How many cells would you like?"));
    if (height === parseInt(height, 10)){
        width = height;
        while (gameContainer.childNodes.length > 1) {
            gameContainer.removeChild(gameContainer.lastChild);
        }
        cells = [];
        createBoard(height, width);
        startEtch();
    } else {
        alert("Please enter a number when resetting.");
    }
}

function getBackground () {
    if (backgroundStyle == 0) {
        return 'black';
    } else {
        return getRandomRgb();
    }
}

function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
function setBackgroundStyle() {
    if (backgroundStyle == 0) {
        backgroundStyle = 1;
    } else {
        backgroundStyle = 0;
    }
}

createBoard(height, width);
startEtch();
reset.addEventListener("click", function() {
    resetGame();
});

colorMode.addEventListener("click", function() {
    setBackgroundStyle();
});



