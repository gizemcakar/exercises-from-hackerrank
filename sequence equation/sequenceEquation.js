// Each value of  between 1 and 5, the length of the sequence, x=1; p(x) and use all x as index in p
// declare them to y values (array) , return y.

let p = [4, 3, 5, 1, 2];
function permutationEquation(p) {
    let newArray = [];
    for(let i=1; i<=p.length; i++){
        newArray.push(p.indexOf(i) +1)
    }
    console.log(newArray)
    let y = [];
    for(let j=0; j<newArray.length; j++){
        y.push(p.indexOf(newArray[j]) +1)   
    }
    return y
}
document.getElementById("sequenceEquation").innerHTML = permutationEquation(p);