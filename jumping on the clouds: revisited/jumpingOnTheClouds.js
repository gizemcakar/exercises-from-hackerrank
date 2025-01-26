//  this is cloud jumping game. Thunderheads or cumulus clouds.
// The character must jump from cloud to cloud until it reaches the start again.
//There is an array of clouds, c and an energy level e=100.
//The character starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud.
// thundercloud, c[i]=1, its energy (e) decreases by 2 additional units.
// The game ends when the character lands back on cloud 0.

function jumpingOnClouds(c, k) {
    // 8 2
    // 0 0 1 0 0 1 1 0
    let e = 100;
    let i = 0;
    do {
        i += k;
        if (i >= c.length) {
            i = i % c.length;
            //  1 1 1 1 1 
            //          4
            //  +7
            //  = 11 % 5 = 1
        }
        e = c[i] === 1 ? e - 3 : e - 1;
    } while (i !== 0)
    return e;
}
document.getElementById("jumpingClouds").innerHTML = jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)