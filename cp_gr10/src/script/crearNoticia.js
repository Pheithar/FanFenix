$(document).ready(function() {
    $('#summernote').summernote();

    $("#tituloNoticia").val("");
    $("#imagenNoticia").val("");


});

function crearNoticia() {

  console.log($("#imagenNoticia"));

  if (!verificarNoticiaNueva()){
    titulo = $("#tituloNoticia").val();
    titulo = $("<h1></h1>").text(titulo);
    titulo.addClass("tituloNoticia")

    contenedorTitulo = $("<div></div>").addClass("titleContenedorNoticia")
    contenedorTitulo.append(titulo)

    imagen = $("<img>").attr("src", $("#imagenNuevaNoticia").attr("src"));

    contenedorImagen = $("<div></div>").addClass("imgNoticia")
    contenedorImagen.append(imagen)

    contenido = $('#summernote').summernote('code');

    contenedorContenido = $("<div></div>").addClass("contenidoNoticia");
    contenedorContenido.append(contenido);


    fecha = $("<div></div>").text(createDate());/*Insertar la fecha actual*/
    fecha.addClass("fecha");



    contenedor = $("<div></div>").addClass("infoContenedor");
    contenedor.append(contenedorTitulo);
    contenedor.append(fecha);
    contenedor.append(contenedorImagen);
    contenedor.append(contenedorContenido);

    previsualizacion = $("<h2></h2>").text("Previsualización");

    noticia = $("<div></div>").addClass("row");
    noticia.append(previsualizacion)
    noticia.append(contenedor)

    $('#ejemplo').html(noticia);

    $(".previsualizacion").show();
    $("#publicarNoticia").show();

  }
}


//Comprueba que los campoes están rellenos
function verificarNoticiaNueva() {
  errorText = false
  if ($("#tituloNoticia").val() == "") {
    $(".previsualizacion").hide();
    $("#publicarNoticia").hide();
    $("#errorTitulo").show();
    errorText = true
  }
  else {
    $("#errorTitulo").hide();
  }

  if ($("#imagenNoticia").val() == "") {
    $(".previsualizacion").hide();
    $("#publicarNoticia").hide();
    $("#errorImagen").show();
    errorText = true
  }
  else {
    $("#errorImagen").hide();
  }
  return errorText
}

var loadFile = function(event) {
  var image = document.getElementById('imagenNuevaNoticia');
  image.src = URL.createObjectURL(event.target.files[0]);
};

function createDate(){
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth()+1; //Enero es 0!
  var year = today.getFullYear();
  if(day<10)
    day = '0'+ day;
  if(month<10)
    month = '0'+ month;

  date = day + '/' + month + '/' + year;
  var time = today.getHours()+ ":";
  var min = today.getMinutes();
  if (min < 10)
    time = time + "0"
  time = time + min;
  date = date + " " + time;
  return date;
}
