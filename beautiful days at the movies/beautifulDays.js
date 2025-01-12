// determine the difference between a number and its reverse and also, this could be divided by k. 
// The day would be called as 'beautiful day'.
// determine number of beautiful days with function below.

let array = [];
let beautifulDayNumbers = 0;

function beautifulDays(i, j, k){
    for(let x=i; x<=j; x++){
        array.push(x);
    }
     for(let y=0; y<array.length; y++){
        if(Math.abs(array[y] - array[y].toString().split('').reverse().join('')) % k === 0){
            beautifulDayNumbers++
        };
    }
    return beautifulDayNumbers;
}
document.getElementById("beautifulDays").innerHTML = beautifulDays(13, 45, 3);