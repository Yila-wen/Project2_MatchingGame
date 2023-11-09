
let score = 0;
let counter = 0;
let pairs = 0;
let index = 0;
let firstPick = 0;
let firstImgId = "";
let secondPick = 0;
let secondImgId = "";
// var arrB = ["imgOne", "imgTwo", "imgThree", "imgFour", "imgFive", "imgSix", "imgSeven", "imgEight", "imgNine", "imgTen", "imgEleven", "imgTwelve", "imgThirteen", "imgFourteen", "imgFifteen", "imgSixteen"];
var arrI = ["1", "1", "2", "3", "3","4","4","5", "5", "6","6","7","7","8", "8","2"];

function shuffle(arr) {
    let currentIndex = arr.length,  randomIndex;
  
    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
  
    return arr;
  }
  

//first we have array of 8 images, we assign images to 2 button numbers
//use the two variables above to keep track of what is selected
//bobom banan doom boom easy  peasy




function imgChange(num, imgId) {

    imgId.src = "p" + num + ".jpg";

}
function imgTemp(num, imgId) {
    score++;
    if (counter < 2) {
        counter++
        if (counter === 1) {
            firstPick = arrI[num];
            firstImgId = imgId;
            imgChange(arrI[num], imgId);
        }
        if (counter === 2) {
            secondPick = arrI[num];
            secondImgId = imgId;
            imgChange(arrI[num], imgId);
            setTimeout(function check() {
                counter = 0;
                if (firstPick === secondPick) {

                    // firstImgId.hidden = "hidden";//only hides most of it, must get button id to hide the whole thing
                    // secondImgId.hidden = "hidden";
                    pairs++;//pairs only adds after you click on third image??? so last one doesnt add
                }
                else {
                    firstImgId.src = "questionMark.png";
                    secondImgId.src = "questionMark.png";
                }

            }, 500)
        }
    }
    if (pairs === 8){

    }
    document.getElementById("score").innerText = "Score: "+score;
    document.getElementById("pairs").innerText = "Pairs: "+pairs;
}
function resetImage(imgId)
{
    let hidden = imgId.getAttribute("hidden");
    console.log(hidden);
    if (imgId.src != "questionMark.png") 
    {
        imgId.removeAttribute("hidden");
        imgId.src = "questionMark.png";
    }
}
function initilize()
{
    aarI = shuffle(arrI);
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
}


