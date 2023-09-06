const logo = document.getElementById("logo");
const barraLateral = document.querySelector(".contenedor_nav");
const spans = document.querySelectorAll(".contenedor_nav  span");
const cambio = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const homePage = document.querySelector(".contenedor-homePage");
const reportaje = document.querySelector(".contenedor-reportaje");
const videoReportaje = document.querySelector(".contenedor-videoReportaje");
const galeria = document.querySelector(".galeria");
const mapa = document.querySelector(".contenedor-mapa")
const spotify = document.querySelector(".contenedor-spotofy")
const footer = document.querySelector("footer");

cambio.addEventListener("click", ()=>{
    let body = document.body;
    body.classList.toggle("dark_mode");
    circulo.classList.toggle("prendido");
})

logo.addEventListener("click", () => {
    barraLateral.classList.toggle("mini-barra-lateral");
    homePage.classList.toggle("min-homePage");
    reportaje.classList.toggle("min-reportajeText");
    videoReportaje.classList.toggle("min-videoReportaje");
    galeria.classList.toggle("min-galeria")
    mapa.classList.toggle("min-mapa")
    spotify.classList.toggle("min-spotify")
    footer.classList.toggle("min-footer")
    spans.forEach((span) => {
        span.classList.toggle("oculto");
    });
});

menu.addEventListener("click", () => {
    barraLateral.classList.toggle("max-barra-lateral");
    if (barraLateral.classList.contains ("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block"
    } else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none"
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add(".mini-barra-lateral");
        homePage.classList.add("min-homePage");
        spans.forEach((span) => {
            span.classList.add("oculto");
        });
    }
})


