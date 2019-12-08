function borrarNoticia(news) {
  //antes de borrar la noticia salta un mensaje de comprobación
  if (confirm("¿Deseas borrar esta noticia?")){
    $(news).parents(".infoContenedor").remove();
    alert("Se ha borrado con éxito ")
  }
}
