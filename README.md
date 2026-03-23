# Ejercicios ReactJS - Entrega 1

Repositorio con los ejercicios de la primera entrega de ReactJS del máster. Son los mismos ejercicios que ya hicimos en vanilla JS pero ahora pasados a React para ir practicando con la librería.

## Tecnología

Se usa React 18 directamente desde CDN junto con Babel Standalone para poder escribir JSX sin necesidad de configurar ningún entorno de compilación. Todo son ficheros estáticos, sin npm ni webpack ni nada por el estilo.

## Estructura

```
index.html              → página de inicio con el índice de ejercicios
js_ejercicio_1.html     → html del ejercicio 1
js_ejercicio1.js        → lógica React del ejercicio 1
...
```

Cada ejercicio tiene su propio html y su propio js para tenerlo todo separado como pide el enunciado.

## Cómo ejecutarlo en local

Como los archivos cargan scripts externos no se pueden abrir directamente como fichero en el navegador, hace falta levantar un servidor local. Lo más fácil si tienes Python:

```bash
python3 -m http.server 8000
```

Luego abrir `http://localhost:8000` en el navegador.

Si no tienes Python pero sí Node.js:

```bash
npx serve .
```

## Ejercicios

1. **Cambiador de Color de Fondo** — botón que cambia el color de fondo de la página a un color hex aleatorio
2. **Contador de Clics** — contador que se incrementa cada vez que pulsas el botón
3. **Lista Dinámica** — añadir y eliminar elementos de una lista
4. **Filtro de Búsqueda en Tiempo Real** — filtra una lista predefinida de animales mientras escribes
5. **Calculadora Sencilla** — suma, resta, multiplicación y división con validación de errores
6. **Temporizador** — cronómetro con botones de inicio, pausa y reinicio
7. **Generador de Contraseñas** — genera contraseñas aleatorias con letras, números y símbolos
8. **Contador de Palabras y Caracteres** — cuenta en tiempo real las palabras y caracteres de un texto
9. **Lista de Tareas con LocalStorage** — to-do list que persiste los datos aunque recargues la página

## Demo

Disponible en GitHub Pages: (enlace pendiente de subir)
