
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("webs-nav");
var sticky = navbar.offsetTop;
document.getElementById("webs-nav").style.zIndex = "10000";
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
