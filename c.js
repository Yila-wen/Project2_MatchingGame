
let score = 0;
let counter = 0;
let pairs = 0;
let index = 0;
let firstPick = 0;
let firstImgId = "";
let secondPick = 0;
let secondImgId = "";





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
            firstPick = num;
            firstImgId = imgId;
            imgChange(num, imgId);
        }
        if (counter === 2) {
            secondPick = num;
            secondImgId = imgId;
            imgChange(num, imgId);
            setTimeout(function check() {
                counter = 0;
                if (firstPick === secondPick) {
                    pairs++;
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
}

function resetButton(){

    for (i =0; i< 16; i++){

    }
}


