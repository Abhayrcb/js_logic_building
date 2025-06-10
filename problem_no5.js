// basic it is to generate a sequence of numbers where each number is one less than the square of its index (starting from 1).


function generateEmptySquareSequence(n) {
    let arr = [];
    for(let i=1;i<=n;i++){
        let value = i*i - 1;
        arr.push(value);
    }
    return arr;
}

console.log(generateEmptySquareSequence(5)); // Expected output: [0, 3, 8, 15, 24]