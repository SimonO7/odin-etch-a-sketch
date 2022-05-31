const gridContainer = document.querySelector(".grid-container");

//Set the parameters
let numOfSquares = 16;
let borderSize = 1;
let squareSize = (700/numOfSquares)- (2*borderSize);    //(total canvas size/number of squares needed) - (sum of left and right borders)

for(let row = 0; row < numOfSquares; row++) {
    //Create a row div
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row-div');
    
    //Create the squares and put into row div
    for (let rowSquare = 0; rowSquare < numOfSquares; rowSquare++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add('grid-square');
        gridSquare.style.height = `${squareSize}px`
        gridSquare.style.width = `${squareSize}px`
        rowDiv.appendChild(gridSquare);
    }

    //Put the row into the container
    gridContainer.appendChild(rowDiv);
}