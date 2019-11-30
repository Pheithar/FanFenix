function borrarNoticia(news) {
  if (confirm("¿Deseas borrar esta noticia?")){
    //  title = $(news).parents(".infoContenedor").next(".titleContenedorNoticia").children(".tituloNoticia").text();

    alert("Se ha borrado con éxito ")
    $(news).parents(".infoContenedor").remove();
  }
}
