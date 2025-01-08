
let ar = [1, 2, 1, 2, 1, 3, 2];
let n = ar.length;

function sockMerchant(n, ar) {
    let counts = {};
    for (var i = 0; i < ar.length; i++){
        counts[ar[i]] = (counts[ar[i]] + 1) || 1;
    }
    let pair = 0;
    for(let x in counts){
        pair += parseInt(counts[x]/2)
    }
    return pair
}
document.getElementById("pairs").innerHTML = sockMerchant(n, ar);