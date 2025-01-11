// professor wants threshold students attendance (k). if class is cancelled return yes, or no.

let k = 3;
let a = [-1, -3, 4, 2];  // times of arrival of students. a[i] <= 0 student arrives early or on time(a[i]=0).
function angryProfessor(k, a) {
    let sumOfStudentsArrived = 0;
    let cancelledClass = "";
    for(let i=0; i<a.length; i++){
        if(a[i] <= 0){
            sumOfStudentsArrived++
        }
    }
    if(sumOfStudentsArrived < k){
        cancelledClass = "YES";
    }
    else{
        cancelledClass = "NO"
    }
    return cancelledClass;
}
document.getElementById("angryProfessor").innerHTML = angryProfessor(k, a);

