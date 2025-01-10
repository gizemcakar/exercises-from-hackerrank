// Each spring, it doubles in height. Each summer, its height increases by 1 meter.
// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring.
// how tall after number cycle of growth?

let n = 5;      // number of growth cycles
function utopianTree(n){
    let height = 1;
    let sum = 0;
    for(let i=0; i<=n; i++){
        if(i === 0){
            sum = height;
        }
        else if(i%2 === 0){
            sum += 1;
        }
        else{
            sum += sum;
        }
    }
    return sum;
}
document.getElementById("height").innerHTML = utopianTree(n);