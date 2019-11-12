$(document).ready(function() {
    $('#summernote').summernote();
    console.log("A");
});

function prueba() {
  console.log($('#summernote').summernote('code'));

  $('#formulario').append($('#summernote').summernote('code'))


}
