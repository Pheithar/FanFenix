$(document).ready(function() {
    $('#summernote').summernote();
});

function prueba() {
  console.log($('#summernote').summernote('code'));

  $('#formulario').append($('#summernote').summernote('code'))


}
