// n prisoner number, m sugar number, s chair number to begin from.
// s'yi en son verilen seker olarak dusunup dongu ona gore devam edecek. 1,2,3,4,1,2, m'e kadar bu şekilde gider.

function saveThePrisoner(n, m, s) {
    let sugar = m+s-1 ;
    let final = sugar>n ? sugar%n : sugar
    return final===0? n : final
}
document.querySelector("#savePrisoner").innerHTML = saveThePrisoner(5, 2, 2);