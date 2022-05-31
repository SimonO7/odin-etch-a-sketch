const gridContainer = document.querySelector(".grid-container");

//Set the parameters
let gridSize = 3;
let borderSize = 2;
let boxSize = (900/gridSize)-borderSize;

for(let row = 0; row < gridSize; row++) {
    //Create a row div
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row-div');
    
    //Create the squares and put into row div
    for (let rowSquare = 0; rowSquare < gridSize; rowSquare++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add('grid-square');
        gridSquare.style.height = `${boxSize}px`
        gridSquare.style.width = `${boxSize}px`
        rowDiv.appendChild(gridSquare);
    }

    //Put the row into the container
    gridContainer.appendChild(rowDiv);
}