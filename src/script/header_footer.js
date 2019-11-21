window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("titleNav").style.display = "none";
    document.getElementById("logoFenix").style.display = "none";
    document.getElementById("logoFenixShrink").style.display = "block";
  }
  else {
    document.getElementById("titleNav").style.display = "block";
    document.getElementById("logoFenix").style.display = "block";
    document.getElementById("logoFenixShrink").style.display = "none";
  }
}

//Mostrar el menu de opciones de iniciar sesion
function showSignIn(){
  $("#iniciarSesionPopUp").show("fast");
}

function hideSignIn(){
  $("#iniciarSesionPopUp").hide("fast");
}

function checkSubmit() {
  users = '[{"userName" : "FanFenix", "password" : "admin"}, {"userName" : "Admin1", "password" : "admin"}]';
  var allUsers = JSON.parse(users);
  console.log(allUsers[0].userName);
}
