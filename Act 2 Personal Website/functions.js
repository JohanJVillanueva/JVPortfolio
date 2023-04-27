window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop-300;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var i = 0;
var txt = 'Photographer in the morning, Student Developer by night.  A Coder with hands-on experience in developing web applications using HTML, CSS and jQuery. Has fundamental knowledge on C# and Python. Can work through difficult problems.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

