window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("titleNav").style.display = "none";
    document.getElementById("logoFenix").style.width = "0%";
    document.getElementById("logoFenixShrink").style.width = "20%";
    document.getElementById("logoFenix").style.display = "none";
    document.getElementById("logoFenixShrink").style.display = "block";
  }
  else {
    document.getElementById("titleNav").style.display = "block";
    document.getElementById("logoFenix").style.width = "10%";
    document.getElementById("logoFenixShrink").style.width = "0%";
    document.getElementById("logoFenix").style.display = "block";
    document.getElementById("logoFenixShrink").style.display = "none";
  }
}
