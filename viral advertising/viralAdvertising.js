// At the beginning:
let sharedPeople = 5;
let personsLiked = Math.floor(sharedPeople/2);
let accumulation = 2;
// each liked people share the advertisement to 3 people. 
// Each day, floor(shared/2) of the recipients like the advertisemen
function viralAdvertising(n) {
    for(let i=2; i<=n; i++){
        sharedPeople = personsLiked * 3;
        personsLiked = Math.floor(sharedPeople/2) ;
        accumulation += personsLiked;
    }
    return accumulation;
}
document.querySelector("#viralAdvertising").innerHTML = viralAdvertising(5);
