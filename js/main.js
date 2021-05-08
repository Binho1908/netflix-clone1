$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var buttonN = document.getElementsByClassName(".buttonN")
var buttonR = document.getElementsByClassName(".buttonR")


function modeR(){
    document.querySelector("body").style.background = "#282936";
    document.querySelector("body").style.color = "white";
    document.querySelector(".logo").style.color = "#F1782C";
    document.querySelector(".botao").style.background = "#f1782c";
}
function modeN(){
    document.querySelector("body").style.background = "var(--preto)";
    document.querySelector("body").style.color = "white";
    document.querySelector(".logo").style.color = "var(--vermelho)";
    document.querySelector(".botao").style.background = "rgba(0,0,0,0.50)";
    
}