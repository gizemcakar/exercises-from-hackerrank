let k = 4;                      // racer's height
let height = [1, 6, 3, 5, 2];   // heights of hurdles to be jumped

let tallestHurdle = 0;
let doseNeeded = 0;
// firstly, find the tallest height among the jumpes and compare with k. Then, find the doses needed
// to pass and return
function hurdleRace(k, height){
    for(let i=0; i<height.length; i++){
        if(tallestHurdle<height[i]){
            tallestHurdle = height[i];      // tallestHurdle determined
        }
        if(k >= tallestHurdle){             // not need any dose to overcome tallest hurdle
            doseNeeded=0;       
        }
        else{
            doseNeeded = tallestHurdle - k;    // difference means how many doses need
        }
    }
    return doseNeeded;
}
document.getElementById("neededDose").innerHTML = hurdleRace(k, height);
