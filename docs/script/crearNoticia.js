$(document).ready(function() {
    $('#summernote').summernote();
});

function prueba() {
  console.log($('#summernote').summernote('code'));

  $('.pruebas').append($('#summernote').summernote('code'))


}
