let path = ["U", "D", "D", "D", "U", "D", "U", "U"];
let steps = path.length;

let countingValleys = (steps, path) =>{
    let seaLevel = 0;
    let numberOfValley = 0;
    for(let i=0; i<path.length; i++){
        if(path[i] === "D"){
            seaLevel--
        }
        else{
            seaLevel++
            if(seaLevel === 0){
                numberOfValley++
            }
        }        
    }
    return numberOfValley;
}
document.getElementById("countingValleys").innerHTML = countingValleys(steps, path);