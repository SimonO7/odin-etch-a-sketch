const gridSizeValue = document.querySelector("#grid-size-value")

function createGrid(numOfSquares) {
    /**Create a grid with specified number of squares, inside the grid container.
     * @param   numOfSquares    Number, the number of squares inside the grid.
     * @returns None
     */
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
            gridSquare.classList.add("grid-square");
            gridSquare.style.height = `${squareHeight}px`
            gridSquare.style.width = `${squareWidth}px`
            gridSquare.style.border = `${borderSize}px solid rgb(196, 196, 196)`;
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
    /**Change the color of the square
     * @param   event   event object, the mouseEnter event object
     * @returns None
     */
    event.target.style.backgroundColor = "black";
}

function clearGrid() {
    /**Clear the current grid
     * @param   None
     * @returns None
    */
    const rowDivs = document.querySelectorAll(".row-div");
    rowDivs.forEach(rowDiv => rowDiv.remove());
}

function updateGrid(gridSize) {
    /**Update the current grid when the grid size value is changed.
     * @param   gridSize   Number, the number of squares to make the grid.
     * @returns None
     */
    clearGrid();
    createGrid(gridSize);
    gridSizeValue.textContent = gridSize;
}

function main() {
    /**Main function to run at page load. Add event listener to the gridSize slider and create the grid with
     * default 16 x 16 size.
     * @param   None
     * @returns None
     */
    const gridSize = document.querySelector("#grid-size");
    const clearGridBtn = document.querySelector("#clear-grid-btn");
    gridSize.addEventListener("input", (event) => updateGrid(event.target.value));
    clearGridBtn.addEventListener("click", () => updateGrid(gridSize.value));
    gridSizeValue.textContent = gridSize.value;
    createGrid(gridSize.value);
}

main();



