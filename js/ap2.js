/// 1. Cambiar el color del carrito y el color del botón addToCart cuando un color es seleccionado
/// - Seleccionando elementos
const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray");
const blackColor = document.querySelector(".blue");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");

// Modificando elementos
// - Agregando detectores de eventos
// - Color rojo
function ponerRojo() {
    let colorActual=itemTag.classList[1];
  
    let elementos = document.querySelectorAll("."+colorActual);
      for (let i = 0; i < elementos.length; i++) {
              elementos[i].classList.remove(colorActual);
              elementos[i].classList.add("fondoRojo");
      }
  imageCard.style.backgroundImage = 'url("./img/rojo.png")';
};

// - Color Gris
function ponerGris() {
    let colorActual=itemTag.classList[1];
  
    let elementos = document.querySelectorAll("."+colorActual);
      for (let i = 0; i < elementos.length; i++) {
              elementos[i].classList.remove(colorActual);
              elementos[i].classList.add("fondoGris");
      }
  imageCard.style.backgroundImage = 'url("./img/gris.webp")';
};

// - Color Azul
function ponerAzul () {
    let colorActual=itemTag.classList[1];
  
  let elementos = document.querySelectorAll("."+colorActual);
    for (let i = 0; i < elementos.length; i++) {
            elementos[i].classList.remove(colorActual);
            elementos[i].classList.add("fondoAzul");

}

  imageCard.style.backgroundImage = 'url("./img/azul.jpeg")';
};

// Implementando el evento clic en el botón
// - Botón del Carrito
const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

// - Botón de retroalimentación
const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);