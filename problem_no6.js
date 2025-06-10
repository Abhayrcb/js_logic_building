// Given a string representing a cell in a 3x3 grid (like "A1", "B2", etc.),


function getRowCol(cellStr) {
    let arr = [
        ["A1", "B1", "C1"],
        ["A2", "B2", "C2"],
        ["A3", "B3", "C3"]
    ]

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (arr[i][j] === cellStr) return [i, j];
        }
    }
}

let cellStr = "B2";
let [row, col] = getRowCol(cellStr);
console.log(`row=${row},col=${col}`); // Expected output: row=1,col=1