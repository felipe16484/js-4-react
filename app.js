//! Manejo de Funciones

    /* 

        //* Manejo de funciones dentro de otras funciones

        function hello (){
            return function (){
                return 'felipe'
        }
    }

        const result = hello();

        console.log(hello()()); // <------ Se utiliza esta sintaxis para ejecutar la función que hay dentro de otra función.

    */


    /* 

        //* Asignación de valores por defecto a parámetros en una función

        function add(x = 23.3, y = 0 ){
            return x + y;
        }

        console.log(add());

    */


//! Manejo de Objetos
            
    /* 
        //* Ingreso a los datos del objeto

        const user = {
            name: 'Felipe',
            lastname: 'Castañeda',
            age:24,
            address: {
                country: 'Colombia',
                city: 'Manizales',
                street: 'Main Street 23'
            },
            friends: ['Brandon', 'Elena'],
            active: true,
            sendMail(){ // <---- De esta manera se pueden crear funciones como propiedades de un objeto
                return 'sending email...'
            }
        }

        console.log(user.address.city)
        console.log(user.friends)
        console.log(user.active)
        console.log(user.sendMail()) // En este caso la función retorna el string normalmente por que el output que se le está dando es por medio del console.log, teniendo en cuenta que dentro de la función sólo actúa el return + string

        */

            
//! Shorthand Property Names

    /* 
        
        //* Asignación de datos ya previamente definidos a propiedades de un objeto 

        const name = 'laptop'
        const price = 3000

        const newProduct = {
            name,
            price
        }

        console.log(newProduct)

    */


//! Manipulación del DOM

    /* 

        //* En la carpeta Listeners - DOM se encuentra un extra de este topic

        console.log(document.title)  //* De esa manera podemos capturar y mostrar el nombre del documento HTML, el cual se encuentra dentro de la etiqueta <head> del mismo
        
        const title = document.createElement('h1') //* .createElement nos permite generar una etiqueta en el documento HTML        
        title.innerText = 'Éste es un título' //* .innerText nos permite cambiar o incluir el contenido (texto) que hay dentro de la etiqueta

        const button = document.createElement('button')
        button.innerText = 'Haz click'

        button.addEventListener('click', function (){ //? <---- Manejadores de eventos
            title.innerText = 'Texto actualizado con js'
            alert('Se realizó un click')
        })

        document.body.append(title) //? .append nos permite añadir elementos al final de algo, si es el doc HTML, lo hará después del último hijo del nodo
        document.body.append(button)  //? si es un array, lo hará al después de la última posición del array       

     */


//! Objetos como Parámetros

    //* Forma básica
    /* 
    const user = {
        name: 'Felipe',
        age: 30
    };
    function printInfo(user){ //? Sabemos que lo que vamos a manejar dentro de la función va a ser un objeto.
        return '<h1>Hola '+user.name+'</h1>' //? Por lo que cual, utilizaremos como ejemplo el ingreso a propiedades del mismo objeto que recibimos directamente.
    }
    
    console.log(printInfo(user)); 

    
    document.body.innerHTML = '<h1>Hola '+user.name+'</h1>' //! Hay una diferencia en esta forma de mandar los elementos al HTML a la que utilizamos anteriormente
                                                            //! con el append, y es que podemos observar que en la forma anterior nosotros dentro de una variable
                                                            //! definimos inicialmente el elemento (nodo) el cual mandamos después con el (document.body.append)
                                                            //! pero en esta forma que estamos utilizando 
    
    */

    //* Con destructuring

    /* 

        //? En parámetros:

        const user = {
            name: 'Felipe',
            age: 30
        };

        function printInfo({name,age}){
            document.body.innerHTML = '<h1>Hola '+name+'</h1>';
        }

        printInfo(user);

    */    

    /* 
        //? En dentro de la función:

        const user = {
            name: 'Juan',
            age: 30
        };

        function printInfo(user){
            const {name,age} = user;
            document.body.innerHTML = '<h1>Hola '+name+'</h1>';
        }

        printInfo(user);
    */
        
     
//! Funciones anónimas

    /* 

        //* Las funciones anónimas son las que no necesitan nombre por lo que se ejecutan en el momento de su creación
        //* Ejemplo:

            console.log(function(){
                return 'Starting example...'
            }())

        //* Podemos observar que la función anónima se encuentra dentro del (addEventListener) y claramente se enuentra sin nombre
        //* lo que nos quiere decir que es una función anónima.

            const button = document.createElement('button');
            button.innerText = 'Click me'

            button.addEventListener('click', function(){
                alert('Button clicked')
            })

            document.body.append(button);

     */

//! Funciones flecha / Arrow functions

    /* 

        //* Función normal

            function add(x,y){
                return x+y;
            }
        

        //* Función flecha / Arrow function

        const add = (x,y) => {
            return x+y;
        }

     */

//! Inline Arrow functions

    /* 

        //* Arrow function normal

            const showText =  () => {
                return '¡Qué se dice!'
            }

        //* Inline arrow function

            const showTextInlineAF = () => '¡Qué se dice, desde inline!'
            const showNumberInlineAF = () => 35
            const showBooleanInlineAF = () => true
            const showArrayInlineAF = () => [1,2,3]
            const showObjectInlineAF = () => ({ name:'Felipe' }) //! Hay una particularidad con este caso, y es que si sólo se le dejan las llaves
                                                  //! después de la flecha, JS va a pensar que ese sería el cuerpo de la función
                                                  //! pero ésto se puede solucionar fácilmente si encerramos las flechas
                                                  //! dentro de paréntesis

            console.log(showTextInlineAF())
            console.log(showNumberInlineAF())
            console.log(showBooleanInlineAF())
            console.log(showArrayInlineAF())
            console.log(showObjectInlineAF())
    
     */

//! Manejos del return

    /* 

        //? Algo que tenemos que tener en cuanta con el (return), es que actúa también como un "cortador", si en algún punto de nuestro código
        //? posicionamos un return, el código que está después del mismo no se va a ejecutar

        //? De alguna manera podemos solventar los usos del (else) si posicionamos adecuadamente el return en las condiciones

        //* Ambos casos los podemos ver en el siguiente ejemplo:

            const button = document.createElement('button');
            button.innerText = 'Click me'

            const isAuthorized = false;

            button.addEventListener('click', function(){

                if(isAuthorized)
                    return alert('Está autorizado');          

                alert('No está autorizado')

            })

            document.body.append(button);

     */

//! Strings literals

    /* 

        //? Es la manera que nosotros tenemos de incluir directamente en un string variables. También se puede definir como poder incluir código dentro de los strings.

        const background = 'red';
        const color = 'white';
        const isAuthorized = false;

        console.log('bg: ',background,'color: ',color);

        const button = document.createElement('button');
        button.innerText = 'Click me'
        button.style = `background: ${isAuthorized ? 'blue' : background}; color: ${color}; padding: 3px; border-radius: 5px; margin: 50px 100px;` //! Los strings literals se aplican acá, también conocidos como interpolación.
        //button.style = 'background: red; color: white; padding: 3px; border-radius: 5px; margin: 50px 100px;' //? Con esta sintaxis podemos darle reglas de css a los nodos/elementos HTML de nuestro doc.


        button.addEventListener('click', function(){

            if(isAuthorized)
                return alert('Está autorizado');          

            alert('No está autorizado')

        })

        document.body.append(button);

     */

//! Array Methods

        /* 

        const names = ['ryan','joe','maria']

        //? Comúnmente lo que se hace para poder recorrer cada una de las posiciones del array es utilizar un ciclo (for), así:
        console.log('Salida del Array por for:')
        for (let i = 0; i < names.length; i++) {
            const element = names[i];
            console.log(element)
        } */

        /* 
        //* Método .forEach

        //? Este método espera como parámetro una función, la cual al momento de ejecutarse lo que va a retornar son justamente
        //? los valores que esta funcion va a estar recibiendo. Recorre cada uno de los elementos y a medida de que pasa por 
        //? cada uno los recibe como un parámetro.
            //* Por buenas prácticas, generalmente un el nombre de un arrar es el plural de los datos que lo componen, lo que quiere decir
            //* que el parámetro de esta funcion debería ser en singular para hacer una buena referencia al contenido que pasa en 
            //* cada iteración.

        console.log('Salida del Array por Método .forEach:')
        names.forEach(function(name){
            console.log(name);
        }) */


        //* Método .map (es el método más utilizado en React)
        
        //? Lo que hace es que al momento de recorrer produce el mismo resultado que el anterior, lo importante es que no sólo lo 
        //? recorre sino que retorna un nuevo arreglo, con la condición de que en cada iteración debe retornar un valor:
        
        /* console.log('Salida del Array por Método .map:')
        const newNames = names.map(function(name){
            return name;
        })
        console.log(newNames) */

        //? Lo que se devuelve con el return es lo que va a ir incluido en el nuevo arreglo:

        /*  console.log('Salida del Array por Método .map:')
        const newNames = names.map(function(name){
            return `Hola ${name}`;
        })
        console.log(newNames) */ 
        
        //? Algo importante a rescatar de este método es que no modifica el array inicial, si se muestra el array inicial
        //? en cualquiera de los casos de esta explicación, podemos ver que sigue tal cual se definió.


        //* Método .find

        //? También recorre cada uno de los elementos, sólo que al momento de recorrer tenemos la posibilidad de colocar
        //? una condición dentro de la función.

        /* console.log('Salida del Array Buscando un Registro con .find:')
        const nameFound = names.find(function(name){
            if(name === 'joe')
                return name;
        })

        console.log(nameFound); */

        //? Si se busca un valor que no existe en el arreglo nos devolverá un (undefined)
    
        
        //* Método .filter
        
        //? Nos permite crear un nuevo arreglo con elementos que hayamos filtrado, es decir, con elementos que cumplan con una condición
        
        /* console.log('Salida del Array Filtrando con .filter:')
        const nameFound = names.filter(function(name){
            if(name !== 'joe')
                return name;
        })

        console.log(nameFound); */
    

        //* Método .concat
    
    /* 
        //? Nos sirve para concatenar dos arreglos sin alterar los que se encuentran envueltos en la función

        const names = ['ryan','joe','maria'];
        const newNames = ['marcos','mario','jhon'];
    
        console.log(names);
        console.log(newNames);
        console.log(names.concat(newNames));
     */
    

//! Spread Operator

    /*     

        //? Utilizando esta funcionalidad, podemos traer toda la información por ejemplo de un array o un objeto donde estemos invocando
        //? el spread operator.

        const user = {
            name:'ryan',
            lastname:'ray'
        }

        const address = {
            street:'main street 123',
            city:'cajanistán'
        }

        const userInfo = {
            ...user,
            ...address
        }

        console.log('Unión de Varios Objetos con Spread Operator: ',userInfo);

     */


//! Ecmascript modules

    //! En este topic es necesario dirigirse al documento (add.js).
    
    //? Hay varias cosas a tener en cuenta cuando estamos trabajando con módulos:

        //* Debemos tener instalado el node en nuestro directorio
            //! npm init
            //! npm install

        //* En el documento package.json debemos incluir la línea: ("type":"module",) después de ("main": "xxxx.js",)

        //* En la etiqueta script, la cual hace la instancia del documento (js) en el HTML, debe ir con una propiedad llamada (type="module")
            //* la cual nos indica que estamos habilitando la funcionalidad que nos permite hacer importaciones de módulos.

        //* La función o la variable que necesitemos exportar deberá tener (export) al inicio de la definición de la misma

        //* Para poder invocar lo que necesitamos importar, se maneja la siguiente sintaxis (import { funcion_a_importar/variable_a_exportar } from "ruta_relativa";)

        
        /* import { add,multiply,active,points,title } from "./add.js";

        
        console.log('Salida de Función add Importada: ',add(10,30));
        console.log('Salida de Función multiply Importada: ',multiply(10,30));
        console.log('Salida de Variables active, points, title Importadas: ',active,points,title); */

    //? Con esto podemos aclarar que tenemos la posibilidad de exportar cualquier tipo de función, variable, etc...

    //? Si queremos exportar algo por defecto

        /* import addModule from "./add.js";
        console.log('Salida de Variable/Función Importada por Defecto: ',addModule); */

    
//! Optional Chaining

    //? Utilizamos estas propiedades al momento en el cual nosotros necesitemos validar, por ejemplo, una propiedad de un objeto

        /* const persona = {
            name: 'Ryan',
            address: {
                city: 'London'
            }
        }

        console.log('Salida Optional Chaining: ',persona.location?.city); */

    //? Podemos ver que la salida por consola al no existir la propiedad location, es undefined. Esta sintaxis nos resume el hecho de tener
    //? que generar una condición para poder capturar el error que nos arroja el no tener una propiedad y estarla, por ejemplo en este caso,
    //? llamándola por consola.


//! Async Await

    //* Primeramente es algo que se utiliza bastante en react, por lo general este tipo de funciones van de la mano con datos extraidos del
    //* backend, los cuales vienen de la mano por una petición.

    //* Hay algo importante a conocer antes de empezar a manejar el (Async/Await), esto es el (fetch()), es una librería que viene por defecto
    //* en el navegador, nos permite colocar una dirección de internet y nos da la posibilidad de traer la información de esta página a una
    //* constante en nuestro código.

        //! Para poder manejar la librería (fetch), es necesario instalar la librería por medio del (npm) primero
        //? npm install

        //! Segundo se debe instanciar la misma arriba de la llamada a la API o a la página de donde se está extrayendo la información.

        import fetch from 'node-fetch';

        /*let data = fetch('https://jsonplaceholder.typicode.com/posts'); //! Esta url consume una API de datos random.

        console.log('Salida de Fetch: ',data); */

            //* Al ser ES6, este mismo cuenta con unas políticas de origen, por lo cual no dejará ejecutar este código por medio del navegador
            //* pero SÍ en un servidor local

        //? Igualmente, al ser ejecutado en un servidor local, lo que devuelve es una promesa, lo cual es muy típico en JavaScript, porque cuando
        //? nosotros ejecutamos lógica del navegador no es que bloqueamos la ejecución del navegador, el navegador hace la lógica mientras el usuario puede 
        //? estar haciendo otras cosas, a ésto se le conoce como (Asincronía) o (Código Asíncrono). Es decir, mientras se ejecuta una lógica, el navegador puede
        //? ir haciendo otras tareas.

        //? Tenemos diferentes tipos de sintaxis con los cuales podemos capturar la espera de la lógica que se ejecuta de forma asíncrona, por ejemplo:

        /* fetch('https://jsonplaceholder.typicode.com/posts')

            .then(function(response){   //!   <----------------------------------------- Ésta es una de las maneras que tenemos de capturar lo que esperamos cuando está listo.
                console.log('Respuesta de la Petición: ',response);
            })

        console.log('Código continuación.') */

        //? Podemos observar que lo que arroja la consola es la ejecución del console.log que dice ('Código continuación.') y después el código que estamos esperando
        //? del (.then(...)), es decir, que se están ejecutando a medida de que van finalizando. Sería algo como (empieza a ejecutar el código de (fetch) y a medida
        //? de que vas ejecutándolo, sigue con el resto del código. Por eso es que se muestra primero el segundo (.log), porque el primer bloque no ha terminado
        //? de ejecutarse)

            //* Es importante tener en cuenta estos conceptos al momento de codificar, porque si implementamos estas prácticas estamos aprovechando los procesos
            //* de nuestro CPU, es decir, no estamos bloqueándolo cada vez por una tarea, sino que seguimos trabajando unas tareas mientras se acaban de ejecutar otras.

        //? Recibiendo la respeuesta como parámetro, nos arroja información poco legible, por lo que podemos hacer lo siguiente para poder leer mejor la respuesta de la petición.

        /* fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function(response){ 
                return response.json(); //! Método que trae la API del navegador para hacer un parseo a JSON 
                                        //! El método también es (Asíncrono), por lo que toca también hacer otro (.then) para este método
            })
            .then(function(data){
                console.log('Respuesta de la Petición: ',data);
            })
            
        console.log('Código continuación.'); */

        //? Podemos ver que la salida de la petición es mucho más organizada y legible.

        
        //* Ejemplo reenviando la información a un HTML creado por medio de JS:


        const ul = document.createElement('ul');

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function(response){ 
                return response.json(); //! Método que trae la API del navegador para hacer un parseo a JSON 
                                        //! El método también es (Asíncrono), por lo que toca también hacer otro (.then) para este método
            })
            .then(function(data){
                console.log('Respuesta de la Petición: ',data);
                data.forEach(function(post){
                    const li = document.createElement('li');
                    li.innerText = post.title;
                    ul.append(li);
                });
                document.body.append(ul);
            })
            
        console.log('Código continuación.');

