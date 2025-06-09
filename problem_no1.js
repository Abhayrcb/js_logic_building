//check a student is fail or pass

const check =(marks)=>{
    if(marks >= 40) return "Pass";
    return "Fail";
}

console.log(check(50));