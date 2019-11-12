//Change content with button
function sobreNosotros(){

  /*
  var a = event.target;
  a = $(a).attr('href');


    if (a == "sobreNosotros.html#contacto"){
      $("#contacto").show();
      $("#clubInfo").hide();
      $("#acciones").hide();
      return false;
    }
    if (a == "sobreNosotros.html#club"){
      $("#clubInfo").show();
      $("#contacto").hide();
      $("#acciones").hide();
      return false;
    }
    if (a == "sobreNosotros.html"){
      console.log("Es sobreNosotros sin más");
      $("#acciones").show();
      $("#contacto").hide();
      $("#clubInfo").hide();
    }
  window.location.href = a;
//  event.preventDefault();

*/
  return true;
}
$(document).ready(function(){
  /*
    $("#contacto").show();
    $("#clubInfo").hide();
    $("#acciones").hide();

    $("#clubInfo").show();
    $("#contacto").hide();
    $("#acciones").hide();

  $("#acciones").show();
  $("#contacto").hide();
  $("#clubInfo").hide();
  */
});
function showContact(){
  $("#contacto").show();
  $("#clubInfo").hide();
  $("#acciones").hide();
}

function showInfoClub(){
  $("#clubInfo").show();
  $("#contacto").hide();
  $("#acciones").hide();
}

function validatedFormButton(){
  $("#submitFormContact").removeClass("myButton");
  $("#submitFormContact").addClass("sendedMailButton");
  $("#submitFormContact").html("Enviado");
}
