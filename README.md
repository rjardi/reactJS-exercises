# Ejercicios ReactJS - Entrega 1

Repositorio con los ejercicios de la primera entrega de ReactJS del máster. Son los mismos ejercicios que ya hicimos en vanilla JS pero ahora pasados a React para ir practicando con la librería.

## Tecnología

Proyecto creado con React 18 y Vite. Vite se encarga del servidor de desarrollo y de compilar el JSX para producción. Es un proyecto multipágina: cada ejercicio tiene su propio HTML como entrada.

## Estructura

```
index.html              → página de inicio con el índice de ejercicios
js_ejercicio_1.html     → html del ejercicio 1
src/js_ejercicio1.jsx   → componente React del ejercicio 1
...
vite.config.js          → configuración de Vite (entradas de cada página)
```

Cada ejercicio tiene su propio html y su propio fichero de código para tenerlo todo separado como pide el enunciado.

## Cómo ejecutarlo en local

```bash
npm install
npm run dev
```

Luego abrir la URL que muestra la terminal (por defecto `http://localhost:5173`).

Para generar la versión de producción en `dist/`:

```bash
npm run build
npm run preview
```

## Despliegue

Cada push a `main` lanza un workflow de GitHub Actions que compila el proyecto y lo publica en GitHub Pages.

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

Disponible en GitHub Pages: https://rjardi.github.io/reactJS-exercises/
