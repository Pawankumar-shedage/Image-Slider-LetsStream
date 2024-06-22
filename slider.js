const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

const imgContainer = document.querySelector(".images-container")

const arrImages = ["./images/LetStream.png","./images/4k-wallpaper-automobile-automotive-branding-1149137.jpg","./images/harley-davidson-HYjJ1_AZnqw-unsplash - Copy.jpg"
]

prevBtn.addEventListener("click", setPrevImg);
nextBtn.addEventListener("click", setNextImg);

const img = document.getElementById("img")

let count = 0;
function setNextImg(){
    count++;
    if(count > arrImages.length - 1)
    count = 0;

    img.src = arrImages[count]
    console.log("Called");
}

function setPrevImg(){
    count--;
    if(count < 0)count = arrImages.length - 1;

    img.src = arrImages[count]
}