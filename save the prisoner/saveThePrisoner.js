// n prisoner number, m sugar number, s chair number to begin from.
// s'yi en son verilen seker olarak dusunup dongu ona gore devam edecek. 1,2,3,4,1,2, m'e kadar bu şekilde gider.
// 0'da seker bittiginden dolayi dongu 1'de bitip son seker kime gidecek bulunur.
function saveThePrisoner(n, m, s) {

    for(let i=m; i>1; i--){
        if(s === n){
           s=1; 
        }
        else{
            s++
        } 
    }
    return s
}
document.querySelector("#savePrisoner").innerHTML = saveThePrisoner(5, 2, 2);