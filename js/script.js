const headerHamburguer = document.getElementById('header-hamburguer-id');
const menuDesplegable = document.getElementById('menu-desplegable');

headerHamburguer.addEventListener('click', () => {
    
    menuDesplegable.classList.toggle('active');

});