

let score = 0;
let counter = 0;
let pairs = 0;
let index = 0;
let firstPick = 0;
let firstImgId = "";
let secondPick = 0;
let secondImgId = "";
let firstFlip = -1;
let secondFlip = -2;
// var arrB = ["imgOne", "imgTwo", "imgThree", "imgFour", "imgFive", "imgSix", "imgSeven", "imgEight", "imgNine", "imgTen", "imgEleven", "imgTwelve", "imgThirteen", "imgFourteen", "imgFifteen", "imgSixteen"];
var arrI = ["1", "1", "2", "2", "3", "3","4","4","5", "5", "6","6","7","7","8", "8"];
var arrII = [];

function shuffle(arr) {
    let currentIndex = arr.length,  randomIndex;
  
    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
  
    return arr;
  }
  //credit Fisher–Yates shuffle
  //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

//first we have array of 8 images, we assign images to 2 button numbers
//use the two variables above to keep track of what is selected
//bobom banan doom boom easy  peasy




function imgChange(num, imgId) {

    imgId.src = "p" + num + ".jpg";

}
function imgTemp(num, imgId) {
if (!arrII.includes(num)){
if (counter === 0){
    score++;
    counter++;
    firstFlip = num;
    firstPick = arrI[num];
    firstImgId = imgId;
    imgChange(arrI[num], imgId);
}

else {
    secondFlip = num;
    if (firstFlip != secondFlip){
        score++;
        secondPick = arrI[num];
        secondImgId = imgId;
        imgChange(arrI[num], imgId);
        setTimeout(check,300);
    }
}
 
    if (pairs >= 7 && score%2 === 0){
        hideWS(2);
        if (score === 16){
            document.getElementById("WS").innerText = "WHAT A GENIUS!!!";
        }
        else if (score <= 24){
            document.getElementById("WS").innerText = "Congrats Your in the TOP 60%";
        }
        else {
            document.getElementById("WS").innerText = "Uh. . . Goodluck next time?";
        }


    }
}
    document.getElementById("score").innerText = "Score: "+score;
}
function resetImage(imgId)
{
    hideWS(0);
    let hidden = imgId.getAttribute("hidden");
    console.log(hidden);
    if (imgId.src != "CardBackground1.jpg") 
    {
        imgId.removeAttribute("hidden");
        imgId.src = "CardBackground1.jpg";
    }
}
function initialize()
{
    hideWS(0);
    aarI = shuffle(arrI);
    arrII = [];
}
function resetButton(){
    resetImage(imgOne);
    resetImage(imgTwo);
    resetImage(imgThree);
    resetImage(imgFour);
    resetImage(imgFive);
    resetImage(imgSix);
    resetImage(imgSeven);
    resetImage(imgEight);
    resetImage(imgNine);
    resetImage(imgTen);
    resetImage(imgEleven);
    resetImage(imgTwelve);
    resetImage(imgThirteen);
    resetImage(imgFourteen);
    resetImage(imgFifteen);
    resetImage(imgSixteen);
    score = 0;
    pairs = 0;
    document.getElementById("score").innerText = "Score: "+score;
    document.getElementById("pairs").innerText = "Pairs: "+pairs;
    aarI = shuffle(arrI);
    arrII = [];
}
function hideWS(num) {
    var wsElement = document.getElementById("WS");
    if (num === 0) {
        wsElement.style.display = "none";
    } else {
        wsElement.style.display = "block";
    }
}

function check(){
    if (firstPick === secondPick) {

        // firstImgId.hidden = "hidden";//only hides most of it, must get button id to hide the whole thing
        // secondImgId.hidden = "hidden";
         pairs++;
         document.getElementById("pairs").innerText = "Pairs: "+pairs;
         arrII.push(firstFlip, secondFlip);

     }
    else {
       firstImgId.src = "CardBackground1.jpg";
       secondImgId.src = "CardBackground1.jpg";
     }
     counter = 0;
     firstFlip = -1;
     secondFlip = -2;
    }




