const gridSizeValue = document.getElementById("gridSizeValue")

function createGrid(numOfSquares) {
    const gridContainer = document.querySelector(".grid-container");
    const borderSize = 1;
    const squareWidth = (gridContainer.clientWidth/numOfSquares)-(2*borderSize);    //(total canvas wiidth/number of squares needed) - (sum of left and right borders)
    const squareHeight = (gridContainer.clientHeight/numOfSquares)-(2*borderSize);
    for(let row = 0; row < numOfSquares; row++) {
        //Create a row div
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row-div');
    
        //Create the squares and put into row div
        for (let rowSquare = 0; rowSquare < numOfSquares; rowSquare++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add('grid-square');
            gridSquare.style.height = `${squareHeight}px`
            gridSquare.style.width = `${squareWidth}px`
            rowDiv.appendChild(gridSquare);
        }

        //Put the row into the container
        gridContainer.appendChild(rowDiv);
    }
    
    //Add listeners to the squares
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => square.addEventListener("mouseenter", addColor));
}

function addColor(event) {
    event.target.style.backgroundColor = "black";
}

function clearGrid() {
    const rowDivs = document.querySelectorAll(".row-div");
    rowDivs.forEach(rowDiv => rowDiv.remove());
}

function updateGrid(event) {
    clearGrid();
    createGrid(event.target.value);
    gridSizeValue.textContent = event.target.value;
}

function main() {
    const gridSize = document.querySelector("#gridSize");
    gridSize.addEventListener("input", updateGrid);
    gridSizeValue.textContent = gridSize.value;
    createGrid(gridSize.value);
}

main();



