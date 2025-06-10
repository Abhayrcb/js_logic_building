function findMissingChar(str){
    let missingchar="";
    for(let i=0;i<str.length-1;i++){
          if(str[i+1].charCodeAt(0)!=str[i].charCodeAt(0)+1){
             missingchar += String.fromCharCode(str[i].charCodeAt(0)+1);
          }
    }
    return missingchar;
} 

let missingChar = findMissingChar("abcdfg");
console.log(`missingChar=${missingChar}`); // Expected output: "e"