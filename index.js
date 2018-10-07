var c, currentScrollTop = 0, navbar = document.querySelector('#navbar');

window.onscroll = function () {
  var a = window.scrollY;
  var b = navbar.offsetHeight;
  currentScrollTop = a;
  if (c < currentScrollTop && a > 2*b) {
    navbar.classList.add("scrollUp");
  } else if (c > currentScrollTop && a > b) {
    navbar.classList.remove("scrollUp");
  }
  c = currentScrollTop;
};
