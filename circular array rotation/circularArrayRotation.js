// move the last element to beginning of array and remove the new last for k times
// queries is an array and contains index number for new array. return the a[queries[i]]

function circularArrayRotation(a, k, queries) {
    let element = [];
    for(let i=1; i<=k; i++){
        a.unshift(a[a.length - 1]);
        a.pop();
    }
    for(let j=0; j<queries.length; j++){
            element.push(a[queries[j]]) ;  
        }
    return element
}

document.querySelector("#newArray").innerHTML = circularArrayRotation([3, 4, 5], 2, [1, 2])