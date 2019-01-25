const gameContainer = document.querySelector("#game-container");
let width = 16;
let height = 16;
let newCell =[];
let cellID;

//Create divs for each sketch to be etched and build the board.
function createBoard(height, width) {
    cellHeight = 1/height*100;
    cellWidth = 1/width*100;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            newCell[i,j] = document.createElement("div");
            newCell[i,j].classList.add("cell");
            newCell[i,j].style.height = cellHeight + '%';
            newCell[i,j].style.width = cellWidth + '%';
            cellID = `${i}-${j}`;
            newCell[i,j].setAttribute('id', cellID);
            gameContainer.appendChild(newCell[i,j]);
            console.log(`cell ${cellID} created.`)   
        }
    }
}

createBoard(height, width);
