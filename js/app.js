
window.addEventListener('load', function() {
    var openMenu = document.getElementById("open-menu");
    var closeMenu = document.getElementById("close-menu");
  
    openMenu.addEventListener("click", openAnimatedMenu);
    function openAnimatedMenu() {
      document.getElementById("animated-menu").style.width = '40%';
      console.log("HOLA");
    }
  
    closeMenu.addEventListener("click", closeAnimatedMenu);
    function closeAnimatedMenu() {
      document.getElementById("animated-menu").style.width = '0';
    }
  });