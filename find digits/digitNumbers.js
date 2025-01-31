// n is the number and it is determined whatever any number contained in n can be divided to it. 
// return number of them.

function findDigits(n) {
    let digitNumbers = 0;
    let number = n.toString().split("")
    parseInt(number);
    for(let i=0; i<number.length; i++){
        if(number[i] !== 0 && n % number[i] ===0){
            digitNumbers++            
        }
    }
    return digitNumbers
}
document.querySelector("#digitNumber").innerHTML = findDigits(1012);