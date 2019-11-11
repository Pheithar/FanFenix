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


//ValidateFORM
(function ($) {
    "use strict";
    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })
    /*==================================================================
    [ Validate ]*/
  var name = $('.validate-input input[name="name"]');
  var email = $('.validate-input input[name="email"]');
  var message = $('.validate-input textarea[name="message"]');

  $('.validate-form').on('submit',function(){
      var check = true;

      if($(name).val().trim() == ''){
          showValidate(name);
          check=false;
      }
      if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
          showValidate(email);
          check=false;
      }
      if($(message).val().trim() == ''){
          showValidate(message);
          check=false;
      }
      return check;
  });

  $('.validate-form .input2').each(function(){
      $(this).focus(function(){
         hideValidate(this);
     });
  });

  function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
  }

})(jQuery);
