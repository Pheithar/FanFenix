$(document).ready(function() {
    $('#summernote').summernote();
});

function crearNoticia() {

  verificarNoticiaNueva();


  console.log($('#summernote').summernote('code'));

  $('.pruebas').append($('#summernote').summernote('code'))


}


//Comprueba que los campoes están rellenos
function verificarNoticiaNueva() {
  $(".noticiasFormulario").click(function(){

  })

}
