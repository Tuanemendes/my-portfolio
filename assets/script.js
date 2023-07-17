
function clickMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

window.addEventListener('scroll', function () {
    var header = document.querySelector('[data-header]');
    header.classList.toggle('scrolling', window.scrollY > 0);
  
  });