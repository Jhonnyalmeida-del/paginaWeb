window.document.getElementById("button-menu").addEventListener("click", function() {
    console.log("Button clicked!");
    const menuList = window.document.getElementById("menu-list");
    if(menuList.style.display === "none") {
        menuList.style.display = "flex";
    }else{
        menuList.style.display = "none";
    }
});

const slides = document.getElementById("slides-box");    
const slide = slides.children;
let currentSlide = 0;

function showSlides(index){
    /*esconde os slides*/
    for(let i =0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    /*corige o indice se ultrapassar os limites*/
    if(index < 0){
        index = slide.length - 1; // Volta para o último slide se estiver no primeiro
    }if(index >= slide.length){
        index = 0; // Volta para o primeiro slide se estiver no último
    }
    /*mostra o slide atual*/
    slide[index].style.display = "flex";

    /*Atualiza a variavel de controle*/
    currentSlide = index;

}
// Avançar
function nextSlide() {
  showSlides(currentSlide + 1);
}

// Voltar
function prevSlide() {
  showSlides(currentSlide - 1);
}

window.addEventListener("load", function() {
    showSlides(currentSlide);
});

const nextButton = document.getElementById("next-slide");/*Armazena o botão para esquerda */
const prevButton = document.getElementById("prev-slide");/*Armazena o botão para direita */

/*Adiciona os eventos de click nos botões*/
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

setInterval(() => {
  nextSlide();
}, 5000); // Troca de slide a cada 3 segundos
