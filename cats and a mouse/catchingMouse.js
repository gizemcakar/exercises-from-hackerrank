let x = 2;
let y = 5;
let z = 4;
let catchingMouse = function catAndMouse(x, y, z){
    let whoCatchesMouse = 0;
    let distancefromA = Math.abs(x-z);
    let distancefromB = Math.abs(y-z);
    if(distancefromA < distancefromB){
        whoCatchesMouse = "Cat A"
    }
    else if(distancefromA === distancefromB){
        whoCatchesMouse = "Mouse C"
    }
    else{
        whoCatchesMouse = "Cat B"
    }
    return whoCatchesMouse;   
}

document.getElementById("catchingMouse").innerHTML = catchingMouse(x, y, z);