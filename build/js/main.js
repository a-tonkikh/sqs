var menu = document.getElementById("menu");
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__menu');

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    menu.style.background = "#111111";
  } else {
    menu.style.background = "rgba(0, 0, 0, 0.5)";
  }
};

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

$('.main-nav__link').on("click", function(){
  $('#hamburger-menu').click();
});
