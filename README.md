# Twitter Mirroring

Copia de la interfaz de usuario de Twitter en su versión web para móviles y tablets. Creado para [Rviewer](https://rviewer.io).

## Herramientas utilizadas

Las herramientas y tecnologías utilizadas son:
  * ReactJS
  * SASS
  * JSX
  * HTML
  * Javascript
  * CSS

## Para empezar

  * Requisitos:
    * Node.
    * NPM.
  * Puedes clonar el repositorio e instalar las dependencias con `npm install`.
  * Iniciar la app con `npm start`.

También **puedes ver la demo** publicada con GitHub Pages **[AQUÍ]**.

Para más info sobre React, puedes ver el `README.REACT.md`.

## Estructura de directorios

Directorios principales:

````
TWITTER-MIRRORING
|
|- public
|   |- img
|       -> Imágenes de la app
|
|- src
    |- Assets
    |   |- Data
    |   |   |- Tweets
    |   |       -> JSON con todos los tweets
    |   | 
    |   |- Styles
    |   |   |- SCSS
    |   |       -> Archivos SCSS
    |   |
    |   |- Svg
    |       -> Logos de la app
    |
    |- Components
    |   -> Componentes de React
    |
    |- Layouts
    |   -> Páginas de la app
    |   
    |- Services   
        |- Utils   
            -> Funciones y utilidades   
````

## Info extra

La app es sólo estética, por lo que no tiene más funcionalidad que ver un tweet en detalle o las imágenes. 
Puedes añadir tweets en `/src/Assets/Data/Tweets/tweets.json` o eliminarlos. Si vas a añadir imágenes o gifs no olvides meterlos en `/public/img` o `/public/img/gif` para poder acceder a ellos.