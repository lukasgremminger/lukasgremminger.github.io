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

(function (canvas, ctx){
  //how much offset every second line should have
  let offset = 50
  //height difference between each line
  let deltaY = 50;
  //distance between each word on x-axis
  let deltaX = 100;

  let color = "#fff";
  let font = "25px sans";


  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  ctx.font = font;
  ctx.fillStyle = color;
  let offsetTracker = 0;
  for (let y = 0; y <= canvas.height; y+=deltaY){
    for (let x = 0; x < canvas.width; x+=deltaX) {
      ctx.fillText("lukas",x + offsetTracker,y);
    }
    offsetTracker+=offset
    if (offsetTracker > offset) offsetTracker = 0;
  }
})(document.querySelector('canvas'), document.querySelector('canvas').getContext('2d'))
