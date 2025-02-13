
let a = [9, 6, 13, 16, 5, 18, 4, 10, 3, 19, 4, 5, 8, 1, 13, 10, 20, 17, 15, 10, 6, 10, 13, 20, 18, 17, 7, 10, 6, 5, 16, 18, 13, 20, 19, 7, 16, 13, 20, 17, 4, 17, 8, 19, 12, 7, 17, 1, 18, 3, 16, 4, 5, 3, 15, 17, 6, 17, 14, 11, 11, 7, 11, 6, 15, 15, 12, 6, 17, 19, 8, 6, 13, 9, 10, 19, 14, 18, 7, 9, 11, 16, 11, 20, 4, 20, 10, 7, 8, 4, 2, 12, 11, 8, 12, 13, 19, 8, 8, 5];
let getMaximumLength = (a) => {
    a = a.sort((a, b) => a-b);  // ranking elements from smaller to bigger
    let max = -1; // assume max length of array in which difference between elements is less than 1
    for(let i=0; i<a.length; i++){  // loop the array elements
        let length = 1;         // assume the length is 1 because to find maximum below
        for(let j= i+1; j<a.length; j++){     // again loop all the elements to each other to find difference less than 1
            if(Math.abs(a[i]-a[j]) <= 1){       
                length++                    //only the element ensured increase the length
            }
        }
        if(max < length){       // to determine maximum length, reassign the max.
            max = length;            
        } 
      } 
      return max;  
    }
    
    document.getElementById("pickingNumbers").innerHTML = getMaximumLength(a);

