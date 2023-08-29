//MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar");

    //Click abrir
    btnMenuOpen.addEventListener("click", function(){
        menuResponsive.classList.add("active");
    });

    //click cerrar
    btnMenuClose.addEventListener("click", function(){
        menuResponsive.classList.remove("active");
    });