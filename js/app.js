//MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

    //Click abrir
    btnMenuOpen.addEventListener("click", function(){
        menuResponsive.classList.add("active");
    });

    //click cerrar
    btnMenuClose.addEventListener("click", function(){
        menuResponsive.classList.remove("active");
    });

    //Cerrar menu con elementos de enlace
    enlaces.addEventListener("click", function(){
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
    });