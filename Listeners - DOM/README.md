<!-- 

    *  Teoría para manejo de Eventos - Listeners - DOM 

 -->

Listado de eventos que podemos utilizar:

    -----> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

Inicialmente tenemos que tener en cuenta es que nosotros, principalmente, lo que necesitamos es reaccionar a los eventos.

Para la parte de los Eventos/Listeners tenemos 2 partes principales: 

    1. Listener: es el que se encarga por medio del parámetro dado en la función del mismo de realizar la escucha del evento
                 que nosotros estamos esperando que ocurra.
    2. Handler: es el código que nosotros ejecutamos cuando ocurre el evento.

Tenemos 3 opciones para aplicar lo anteriormente mencionado:

    1. Directamente en el DOM: las etiquetas HTML al igual que los parámetros de las funciones (js) listeners, comparten una 
                               lista la cual definen el tipo de evento que deseamos escuchar. Para el caso del HTML, manejan 
                               propiedades on...='', que son las representaciones de los tipos de eventos a escuchar directamente
                               en el DOM.
                               <!-- ! No se recomienda utilizar esta forma, y que por buenas prácticas no se recomienda mezclar el html con el js. -->
                               <!-- ? Esta forma se encuentra en el documento HTML, específicamente en el h1 del mismo. -->

    2 y 3. Directamente en el documento JS: por medio de los selectores, se captura la etiqueta con la cual queremos interactuar
                                            y ya definiendo la forma en la cual queremos trabajar los listeners
                                        <!-- ? Estas formas se encuentran en el documento JS. -->



<!-- ? NOTAS: -->

--> Hay un par de opciones que tenemos al momento de incluir el documento JavaScript en el HTML:
        1. Sobre la etiqueta <head>. Esta opción si se quiere trabajar lo más recomendado es utilizar una propiedad llamada -- defer --, la cual
           cumple la función de esperar hasta que el documento HTML cargue para que se instancie el mismo documento JavaScript al cual se le está 
           incluyento esta propiedad. Un ejemplo de cómo quedaría esta instancia con la propiedad sería el siguiente: <script defer src="app.js"></script>.
        2. Finalizando la etiqueta <body>, no afuera. Ésta es la más utilizada y sola de por sí, no necesita de otra "funcionalidad" para que funcione
           normalmente; pero si hay un pequeño punto que se tiene que tener en cuenta. En el llegado caso que alguna parte de nuestro código JS interaccione 
           con algo justo cuando se ingresa a la página o aplicativo, debemos capturar esta interacción por medio del evento --  DOMContentLoaded  --.