const moreOptions = document.querySelector("#bmore");   //menu desplegable de more
const bShowMobileLinks = document.querySelector("#bmenu");  //hamburgesa
const mobileMenu = document.querySelector(".links");        //menu mobile (no bmore)
const moreMenu = document.querySelector(".more .menu");     

bShowMobileLinks.addEventListener("click", (e) =>{      //si tiene show lo va a quitar si no lo tiene lo va a poner 
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click",(e) =>{
    e.preventDefault();
    moreMenu.classList.toggle("show");
});