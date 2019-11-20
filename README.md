# FanFenix
Reforma de la página web del equipo cpl madrid. La página actual es [Fénix](www.cplmadrid.com)

El proyecto consitirá en una parte frontend y una parte backend

Es un proyecto final para la asignatura de Interfaces de Usuario de la Universidad Carlos III de Madrid.

La entrega de la asigantura consiste únicamente en la parte de frontEnd del sitio web.

El objetivo final es sustituir el sitio web actual por el nuevo diseño.

## Lenguajes:

Para este proyecto los lenguajes usados serán

- HTML
- CSS
- JavaScript

## Bibliotecas externas

Para el desarrollo del sitio web usamos bibliotecas y frameworks externos

- Bootstrap
- Summernote

# Modificaciones de las bibliotecas

Hemos modificado alguna de estas bibliotecas para que se adecue a lo que queremos que haga:

## summernote/summernote.js
- Línea 7018:

Original:

```diff
! .attr('src', '//www.youtube.com/embed/' + youtubeId + (start > 0 ? '?start=' + start : ''))
```
Nuevo
``` diff
+ .attr('src', 'https://www.youtube.com/embed/' + youtubeId + (start > 0 ? '?start=' + start : ''))
```

## bootstrap/bootstrap.css
- Entre las líneas 155-178 comentadas:

Se refieren a las tag 'a' para que no las modifique sin nuestro permiso

```diff
-a {
-  color: #007bff;
-  text-decoration: none;
-  background-color: transparent;
-}

-a:hover {
-  color: #0056b3;
-  text-decoration: underline;
-}

-a:not([href]):not([tabindex]) {
-  color: inherit;
-  text-decoration: none;
-}

-a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
-  color: inherit;
-  text-decoration: none;
-}

-a:not([href]):not([tabindex]):focus {
-  outline: 0;
-}

```


### Fecha Inicio:

07/11/2019

### Creadores
@[Pheithar](https://github.com/pheithar) y @[axpm](https://github.com/axpm)
