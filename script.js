const menu = document.getElementById("menu-header");
const body = document.getElementById("page");
const sideMenu = document.querySelector('.sidemenu');
const buttonsSideBar = document.querySelectorAll('.button-sidebar');
const openSubmenu = document.querySelectorAll('.subemnu');
const buttonSubmenu = document.querySelectorAll('.button-submenu');

menu.onclick = function(){
    menu.classList.toggle("openmenu");
    body.classList.toggle("body-transform");
    sideMenu.classList.toggle("open-sidemenu");
}


function turn(element){
    element.classList.toggle("button-sidemenu");
}
function openSubMenuFunction(element){
    element.classList.toggle("open-submenu");
}
function compressFuncion(element, element2){
    buttonsSideBar.forEach(function(element3, index){
        if(element !== element3){
            element3.classList.remove("button-sidemenu");
            openSubmenu[index].classList.remove("open-submenu");
        }
    })
    turn(element);
    openSubMenuFunction(element2);
}


buttonsSideBar.forEach(function(buttonElement, index){
    buttonElement.addEventListener("click", function(){
        compressFuncion(buttonElement, openSubmenu[index]);
    });
    buttonSubmenu[index].addEventListener("click", function(){
        compressFuncion(buttonElement, openSubmenu[index]);
     })
})