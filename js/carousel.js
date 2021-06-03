let imgObject = [
  "./img/booksave.png",
  "./img/diasvividos.png",
  "./img/contato.png",
  "./img/shower.png",
  "./img/pedepizza.png",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

// Essa function pega a URL das imagens.
function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
}

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  /* Se houver uma próxima img depois da última img do array, 
     ela recebe a img do index 0 do array */
  if (nextImg >= (imgObject.length -1)) { 
    nextImg = 0; 
  } else {
    nextImg++; // recebe a img seguinte.
  }

  loadGallery();
}

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
  
  /* Se a img anterior tiver o index 0, 
     ela recebe a última imagem do array. */
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--; // recebe a img anterior.
  }

  loadGallery();
}

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);

loadGallery();



