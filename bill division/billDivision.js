let bill = [3, 10, 2, 9];
let k = 1;
let b = (bill.reduce((acc, x) => acc + x, 0))/2;

function bonAppetit(bill, k, b) {
    let sum = 0;
    for(let i=0; i<bill.length; i++){
        sum += bill[i]
    }
    let overCharged;
    if((sum-bill[k])/2 === b){
        overCharged = "Bon Appetit";       
    }
    else{
        overCharged = b - (sum-bill[k])/2
    }
    console.log(overCharged)
    return overCharged
}

document.getElementById("overCharged").innerHTML = bonAppetit(bill, k, b);
