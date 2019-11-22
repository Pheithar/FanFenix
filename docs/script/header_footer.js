$( document ).ready(function() {
  //Si no existe la cookie 'registered', la crea
  var allCookies = "; " + document.cookie;
  var parts = allCookies.split("; " + "registered" + "=");
  if (parts.length != 2){
     document.cookie = "registered=False"
   }

   //Mostrar una vista u otra dependiendo de como sea el cookie
   allCookies = "; " + document.cookie;
   parts = allCookies.split("; " + "registered" + "=");
   //Coger el valor de la cookie registered
   var valueRegistered = parts[1].split(";")[0];
   if (valueRegistered == "True") {
     //USUARIO REGISTRADO

   }
   else {
     //USUARIO NO REGISTRADO
   }


});

window.onscroll = function() {scrollFunction()};

//Cambiar el header según el scroll de la ventana
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

//Esconder el pop-up de iniciar sesion
function hideSignIn(){
  $("#iniciarSesionPopUp").hide("fast");
}

//Validar el inicio de sesión
function checkSubmit() {
  //Esto tiene que estar en servidor
  var users = '[{"userName" : "FanFenix", "password" : "admin"}, {"userName" : "Admin1", "password" : "admin"}]';
  //
  //parsear el json de usuarios
  var allUsers = JSON.parse(users);
  //Coger lo que introduce el usuario
  var valueUserName = document.getElementById("iniciarSesionUser").value;
  var valuePassword = document.getElementById("iniciarSesionContrasseña").value;
  var logIn = false;
  //Comprobar que exista, y si no, mandar un error
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].userName == valueUserName && allUsers[i].password == valuePassword) {
      logIn = true
      //MODIFICAR COOKIE
      document.cookie = "registered=True";
    }
  }
  if (!logIn) {
    console.log("Usuario o contraseña incorrecta");
  }
}
