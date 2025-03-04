# Trabajando con React
<https://es.react.dev/>
<https://es.legacy.reactjs.org/>

## Para crear aplicaciones Mobile
<https://reactnative.dev/>

## Para crear aplicaicones Desktop
<https://www.electronjs.org/>

## ¿Qué es React?
Una librería que nos permite construir interfaces web de manera sencilla y rápida. Es muy recodable utilizarla porque nos simplifica la gestión del DOM. (querySelector, addEventListener, createElement, getAttribute) -> La manipulación del DOM ahora se la delegamos a REACT.

# Puntos 

1. Declaractivo
2. Basado en componentes
3. Fácil transición a la construcción de aplicaciones Mobile

## Crear un proyecto Vite para trabajar con React

```sh
npm create vite@latest . # crear la estructura de archivo en el directorio actual.
```
> Menú iteractivo

1. React
2. JavaScript

### Instalar las dependencias 

```sh
npm i
```

### Arrancar el servidor de desarrollo

```sh
npm run dev
```

### Detener el servidor de desarrollo

Ctrl + C

## Para activar el linter 

<https://eslint.org/>

* dbaeumer.vscode-eslint
* usernamehw.errorlens


# Extensión para desarrolla aplicaciones React en el navegador.

<https://react.dev/learn/react-developer-tools>

<https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en>

# Extensión para facilitar el desarrolo de app React con VSC

* dsznajder.es7-react-js-snippets

# JavaScript XML 
Una extensión de Javascript usando XML -> Padre del HTML.
O sea que el jsx, 
**O sea que el jsx, no es HTML.**

## Para transformar el JSX para que lo entienda el navegador, necesito de una herramienta llamada BABEL. 

<https://babeljs.io/>

Babel es un transpilador (copiladores) que convierte código moderno (JSX, ES6+) en código que los navegadores entienden.

## Props

Datos que los compoentes reciben de entrada. Datos que le voy pasar al componente y el componente va a recibir dentro parametro. Muy parecido al uso de funciones que ya conocemos.