const gridSizeValue = document.querySelector("#grid-size-value")
let color = "#000000"
let randomColorMode = false;
let linesVisible = true;

function createGrid(numOfSquares) {
    /**Create a grid with specified number of squares, inside the grid container.
     * @param   numOfSquares    Number, the number of squares inside the grid.
     * @returns None
     */
    const gridContainer = document.querySelector(".grid-container");
    const squareWidth = (gridContainer.clientWidth/numOfSquares);    //(total canvas wiidth/number of squares needed)
    const squareHeight = (gridContainer.clientHeight/numOfSquares);
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
            if (linesVisible === true) {
                gridSquare.classList.add("grid-border");
            }
            gridSquare.addEventListener("mouseenter", addColor);
            rowDiv.appendChild(gridSquare);
        }

        //Put the row into the container
        gridContainer.appendChild(rowDiv);
    }
}

function addColor(event) {
    /**Change the color of the square. If randomColorMode is on, use a random color. Else, use the selected color.
     * @param   event   event object, the mouseEnter event object
     * @returns None
     */
    if(randomColorMode) {
        event.target.style.backgroundColor = randomColor();
    }
    else {
        event.target.style.backgroundColor = color;
    }
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

function toggleGridLines() {
    /**Toggle the visibility of the grid lines
     * @param   None
     * @returns None
    */
    const squares = document.querySelectorAll(".grid-square");
    if (linesVisible) {
        squares.forEach((square) => square.classList.remove("grid-border"));
        linesVisible = false;
    }
    else {
        squares.forEach((square) => square.classList.add("grid-border"));
        linesVisible = true;
    }
}

function randomColor() {
    /**Generate a random RGB color value
     * @param   None
     * @returns string, a RGB value.
     */
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return (`rgb(${r}, ${g}, ${b})`);
}

function toggleRandomColor(event) {
    /**Toggle between random color mode and single color mode. Button will update to show if random color mode
     *      is on or not.
     * @param   event   Event object
     * @returns None
     */
    if (randomColorMode) {
        randomColorMode = false;
    }
    else {
        randomColorMode = true;
    }
    event.target.classList.toggle("button-selected")
}

function main() {
    /**Main function to run at page load. Add event listener to the buttons and create the grid with
     * default 16 x 16 size.
     * @param   None
     * @returns None
     */
    const gridSize = document.querySelector("#grid-size");
    const clearGridBtn = document.querySelector("#clear-grid-btn");
    const colorPicker = document.querySelector("#color-picker");
    const toggleGridBtn = document.querySelector("#toggle-grid-lines");
    const randomColorModeBtn = document.querySelector("#random-color-mode");

    gridSize.addEventListener("input", (event) => updateGrid(event.target.value));
    clearGridBtn.addEventListener("click", () => updateGrid(gridSize.value));
    toggleGridBtn.addEventListener("click", toggleGridLines);
    randomColorModeBtn.addEventListener("click", toggleRandomColor);
    colorPicker.addEventListener("input", (event) => color = event.target.value);

    gridSizeValue.textContent = gridSize.value;
    createGrid(gridSize.value);
}


main();



