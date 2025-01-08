
function pageCount(n, p){
    let turnedPageFromBeginning = 0;
    for(let i=1; i<p; i=i+2){
        turnedPageFromBeginning++;       
    }
    let turnedPageFromLastPage = 0;
    let z = n
    if(n % 2 === 1){
        z = n-1
    }
    for(let i=z; i>p; i=i-2){
        turnedPageFromLastPage++        
    }
    let minimumPageTurned = 0;
    if(turnedPageFromBeginning < turnedPageFromLastPage){
        minimumPageTurned = turnedPageFromBeginning
    }
    else{
        minimumPageTurned = turnedPageFromLastPage;
    }
    return minimumPageTurned;
}

document.getElementById("minimumPage").innerHTML = pageCount(6,2)
