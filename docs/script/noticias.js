function borrarNoticia(news) {
  if (confirm("¿Deseas borrar esta noticia?")){
    //  title = $(news).parents(".infoContenedor").next(".titleContenedorNoticia").children(".tituloNoticia").text();

    $(news).parents(".infoContenedor").remove();
    alert("Se ha borrado con éxito ")
  }
}
