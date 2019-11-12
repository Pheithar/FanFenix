function functionName() {
  console.log("A");
  var doc = document.open("text/html","replace");
  var texto = "<html><body><h1>Saludo</h1>Hola";
  doc.write(texto);
  doc.close();
}
