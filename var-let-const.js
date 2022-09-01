//! Diferencia entre var,let y const

//* Hoisting: es un mecanismo de JavaScript en el que las variables y declaraciones de funciones se mueven a la parte superior de su ámbito antes 
//* de la ejecución del código.
//? Un bloque es una parte de un código que está deliimitada por {}. Todo lo que está dentro de llaves es un bloque.


//* Ámbito - Alcance - Scope:
//? Cada una de estar formas de declarar variables tienen algo llamado (ámbito),(alcance) o (scope). Ésto nos indica dónde están disponibles
//? cada una de ellas para su manejo, ya que tienen un ámbito diferente.

    //* var:
        //! Tienen un ámbito global
        //? Si estas variables están generadas por fuera de las funciones quiere decir que se pueden utilizar en cualquier parte del código
        //? Si se define dentro de una función quiere decir que están disponibles sólo dentro de la función.

        //! Son re-declarables y modificables
        //* Ejemplos:

            //? De esta forma no tendríamos problemas o errores.
            var saludar = '¡Hey!, hola.';
            var saludar = '¡Hey!, hola también.';

            //? De esta forma tampoco.
            var saludar = '¡Hey!, hola.';
            saludar = '¡Hey!, hola también.';

        //! Hoisting
            var saludar = '¡Hey!, hola.';
            var tiempos = 4;

            if (tiempos > 3) {
                var saludar = '¡Hey!, hola también.'; //! Podemos observar que a pesar de que la re-definición de (saludar) está dentro de un bloque
            }                                         //! al momento en que más abajo ejecutamos un console.log de (saludar), nos permite acceder a esta misma.
            
            console.log('Con var: ',saludar) //! "Dice:   ¡Hey!, hola también."

    //* let:
        //! Tiene un ámbito de bloque
        //? La variables definidas con (let) sólo estarán disponibles para el uso dentro del bloque, si queremos acceder a ellas fuera del bloque nos 
        //? devolverá un error diciendo que la variable no se encuentra definida (undefined).

        //! Son modificables pero NO RE-DECLARABLES
        //* Ejemplos:

            //? De esta forma no tendríamos problemas o errores.
            let saludarLet = '¡Hey!, hola.';
            saludarLet = '¡Hey!, hola también.';

            //? De esta forma sí.
            let saludarLet2 = '¡Hey!, hola.';
            //let saludarLet2 = '¡Hey!, hola.';

            //? Pero, hay algo que debemos rescatar y es que si definimos la variable en diferentes ámbitos NO HABRÁ ERROR

            let saludarLet3 = "¡Hey!, hola.";
            if (true) {
                let saludarLet3 = "¡Hey!, hola también.";
                console.log('Con let definido EN BLOQUE y fuera de bloque: ',saludarLet3);
            }
            console.log('Con let definido en bloque y FUERA DE BLOQUE: ',saludarLet3);

        //! Hoisting
        //? Al igual que (var), las declaraciones (let) se elevan a la parte superior. A diferencia de (var) que se inicializa como undefined, la palabra 
        //? clave (let) no se inicializa. Si intentamos usar una variable (let) antes de declararla, obtendrás un (Reference Error).

//* De esta manera podemos rescatar que, la mejor opción para definir variables es let, puesto que no debemos preocuparnos si se ha utilizado el mismo nombre de una
//* variable antes, por lo que sólo existe en su ámbito. Si definimos una variable por fuera de funciones, su ámbito va a ser general; si definimos una variable dentro 
//* de un bloque, sú ámbito será dentro de ese bloque. Podemos dar como conclusión que si tenemos una variable (let myVariable) con un ámbito general y tenemos una
//* función en la cual estamos definiendo otra variable con el mismo nombre y hacemos por ejemplo, un console.log de ella, podemos observar que la salida en la 
//* consola será del valor de la variable que se encuentra en el ámbito de la función.

    //* const:
        //! Tienen un ámbito de bloque
        //! NO SON MODIFICABLES Y RE-DECLARABLES
        //? Se tiene que tener en cuenta que la declaración y la inicialización de una variable (const) debe ser en el mismo momento.

        //! Si nosotros definimos un objeto con (const), el mismo no se puede modificar ni re-declarar, pero las propiedades SÍ
        //*Ejemplo:

            const personaConst = {
                nombre:'Felipe',
                apellido:'Castañeda',
                direccion:'Av. Falsa 123'
            }

            console.log('Objeto Inicial con Const: ',personaConst);

        //? Hay una particularidad y es que nosotros no podemos hacer ésto:
            
            /* 
            personaConst = {
                nombre:'Antonio',
                apellido:'Alfaro',
                direccion:'Av. Falsa 321'
            }

            console.log('Objeto Inicial con Const: ',personaConst);
             */

        //? Podemos hacer lo siguiente

            personaConst.nombre = 'Antonio';
            personaConst.apellido = 'Alfaro';
            personaConst.direccion = 'Av. Falsa 321';

            console.log('Objeto Const con Propiedades Modificadas: ',personaConst);
