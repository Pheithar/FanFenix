$(document).ready(function() {
    $('#summernote').summernote();
    console.log("A");
});

function prueba() {
  console.log($('#summernote').summernote('code'));

  $('.pruebas').append($('#summernote').summernote('code'))


}
