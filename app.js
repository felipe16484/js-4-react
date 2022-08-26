// Manejo de Funciones

    /* 

    // Manejo de funciones dentro de otras funciones


        function hello (){
            return function (){
                return 'felipe'
        }
    }

        const result = hello();

        console.log(hello()()); // <------ Se utiliza esta sintaxis para ejecutar la función que hay dentro de otra función.

    */


    /* 


        // Asignación de valores por defecto a parámetros en una función


        function add(x = 23.3, y = 0 ){
            return x + y;
        }

        console.log(add());

    */


// Manejo de Objetos
            
    /* 
        // Ingreso a los datos del objeto

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

            
// Shorthand Property Names

    /* 
        
        // Asignación de datos ya previamente definidos a propiedades de un objeto 

        const name = 'laptop'
        const price = 3000

        const newProduct = {
            name,
            price
        }

        console.log(newProduct)

    */

// Manipulación del DOM

        // Sería bueno profundizar en el tema de eventos y manejo

        console.log(document.title)
        
        const title = document.createElement('h1')        
        title.innerText = 'Éste es un título'

        const button = document.createElement('button')
        button.innerText = 'Haz click'

        button.addEventListener('click', function (){ // <---- Manejadores de eventos
            title.innerText = 'Texto actualizado con js'
            alert('Se realizó un click')
        })

        document.body.append(title)
        document.body.append(button)