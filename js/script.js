const Slider = document.getElementById('slider');
let mainImage = document.querySelector(".main-sect");
const imagesArray = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];
const titles = [
    'Austria',
    'Italia',
    'Svizzera',
    'Congo',
    'Marocco',
]
const subtitles = [
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
]
let currentIndex = 0;
 for(let i = 0; i < imagesArray.length; i++){
    mainImage
    mainImage.innerHTML += `
        <div class="main">
            <img src="${imagesArray[i]}" alt="">
            <h3>${titles[i]}</h3>
            <p>${subtitles[i]}</p>
        </div>  
    `;

 };
 const showImage = document.getElementsByClassName("main");
 showImage[currentIndex].classList.add("show");

const down = document.getElementById("down");
    down.addEventListener("click", giu);

    currentIndex = 0;
    showImage[currentIndex].classList.add("show");
    down.addEventListener("click", giu);

const up = document.getElementById("up");
up.addEventListener("click", su);

function giu(){
      showImage[currentIndex].classList.remove("show");
        currentIndex++;
        if(currentIndex > 4){
            currentIndex = 0;
        }
        showImage[currentIndex].classList.add("show");  
}
function su(){
    showImage[currentIndex].classList.remove("show");
    currentIndex--;
    showImage[currentIndex].classList.add("show");
}
 Slider.append(mainImage);
