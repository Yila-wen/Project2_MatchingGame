

let counter = 0;
let pairs = 0;
const img1 = document.getElementById("buttonOne");
const img2 = document.getElementById("imgTwo");
let index = 0;
let firstPick = 0;
let secondPick = 0;




//first we have array of 8 images, we assign images to 2 button numbers
//use the two variables above to keep track of what is selected
//bobom banan doom boom easy  peasy




function imgChange(num,imgId){   

    imgId.src = "p" + num + ".jpg"; 
   
}
function imgTemp(num,imgId){
if (counter <2){
counter++
if (counter === 1){
    firstPick = num;
    imgChange(num,imgId);}
if (counter === 2){
    secondPick = num;
    imgChange(num,imgId);
setTimeout(function check(){
    counter = 0;
    if (firstPick === secondPick){pairs++};},100)
}
    

}
}
