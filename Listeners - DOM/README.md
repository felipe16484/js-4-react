<!-- 

    *  Teoría para manejo de Eventos - Listeners - DOM 

 -->

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

    2. Directamente en el documento JS: por medio de los selectores, se captura la etiqueta con la cual queremos interactuar