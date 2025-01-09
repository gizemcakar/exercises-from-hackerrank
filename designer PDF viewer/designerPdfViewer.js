//find the size of word using h and heightest letter in word. assume each letter wide is 1 unit.
let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]; //heights of each letter from a to z
let word = "abc";

let wide = word.length;
let tallestLetter = 0;

function designerPdfViewer(h, word){
    word.split("").forEach( w => {                      // w word anlamında
        const index = w.charCodeAt(0) - 97 ; 
        // charCodeAt() metodu ile karakterin ascii kodunu kullandık. 
        // a=97 oldugu icin cıkardık, h arrayinde 0 ile basladıgı icin her bir karakterin indexini
        // 0 ile baslayacak sekilde olusturduk.
        const height = h[index];
        if(height > tallestLetter && height <= 7){
            tallestLetter = height;
        }
    })
    return wide*tallestLetter;
}
document.getElementById("designerPdfViewer").innerHTML = designerPdfViewer(h, word);