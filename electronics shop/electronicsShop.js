// return the maximum value less than budget(b), if not possible, return -1
let keyboards = [3, 1];
let drives = [5, 2, 8];
let b = 10;
let getMoneySpent = (keyboards, drives, b) => {
    let total = 0;
    let array = [];
    for(let i=0; i<keyboards.length; i++){
        for(let j=0; j<drives.length; j++){
            total = keyboards[i] + drives[j];
            array.push(total);
        }
    }
    array.sort().reverse();
    let biggest = -1;       // 0 da alinabilecek mumkun deger olarak gorunuyor. o yuzden, -1
    for(let k=0; k<array.length; k++){
        if(array[k]>biggest){
             if(array[k]<=b){
                biggest = array[k]
             }
        }
    }
    return biggest;
}
document.getElementById("electronicsShop").innerHTML = getMoneySpent(keyboards, drives, b);


// diger ornek olarak; b=5, keyboard=[5], drives=[4] girince -1 donuyor.