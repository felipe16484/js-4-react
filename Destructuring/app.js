//? DESTRUCTURING / DESTRUCTURACIÓN
//* Definición: es una técnica que aplicamos sobre arrays y sobre objetos para asignar cada una de las propiedades de este tipo de datos a una variable nueva.
//* Simplifica el trabajo de estar creando una variable nueva para asignarla a cada una de las posiciones de un array o a cada propiedad de un objeto lo podemos hacer
//* con el destructuring.

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
//!Arrays
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


//! Ejemplo por defecto

const listaDefecto = [10,20,30];

const posDefecto1 = listaDefecto[0];
const posDefecto2 = listaDefecto[1];
const posDefecto3 = listaDefecto[2];

console.log('Ejemplo por Defecto: ',posDefecto1,posDefecto2,posDefecto3);



//! Destructuring para arrays[]:
//? Esta sintaxis la utilizamos cuando necesitamos que cada una de las posiciones del array quede en cada una de las variables que estamos definiendo en nuestra constante.

const listaArr1 = [10,20,30];
const [pos1Arr1,pos2Arr1,pos3Arr1] = listaArr1;
console.log('Destructuring para Arrays: ',pos1Arr1,pos2Arr1,pos3Arr1);

//? Si nosotros quisiéramos obviar una posición, es decir, no incluirla en el proceso de destructuring, manejaríamos la siguiente sintaxis:
//! Si hacemos la prueba para ver que de verdad no estamos asignando nada, por ejemplo a una variable -- pos1Arr2 --, claramente podemos
//! pareciar el error en la consola, ya que realmente no se encuentra definida la variable.

const listaArr2 = [10,20,30];
const [pos1Arr2,,pos3Arr2] = listaArr2;
console.log('Destructuring para Arrays Excluyente: ',pos1Arr2,pos3Arr2);

//? Si queremos individualizar la asignación de cierta cantidad de posiciones de un array y el restante de las posiciones incluirlas juntas en una  
//? variable (la cual queda como array), hacemos lo siguiente:
//* SPREAD OPERATOR
const listaArr3 = [10,20,30,40,50,60,70,80];
const [pos1Arr3,pos2Arr3,pos3Arr3, ...restante] = listaArr3;
console.log('Destructuring para Arrays con Spread Operator: ',pos1Arr3,pos2Arr3,pos3Arr3,restante);



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
//! Objetos
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */



//! Forma por defecto

const personaDefecto = {
    nombre: 'Felipe',
    apellido: 'Castañeda',
    edad: 24,
};

const nombreDefecto = personaDefecto.nombre;
const apellidoDefecto = personaDefecto.apellido;
const edadDefecto = personaDefecto.edad;

console.log('Ejemplo por Defecto: ','Nombre/'+nombreDefecto,'  Apellido/'+apellidoDefecto,'  Edad/'+edadDefecto);



//! Destructuring para Objetos
//? Para realizar la desestructuración para objetos podemos utilizar una sintaxis muy similar a la que usamos anteiormente con los array, la única 
//? diferencia es que al momento de definir las variables con las que vamos a separar las propiedades no utilizamos los [] como en los array, sino,
//? {} para el manejo de objetos.
//* Principalmente las variables en las que guardaremos las propiedades deben tener el mismo nombre que las propiedades, pero eso lo podemos solventar
//* manejando la sintaxis { nombre_propiedad: nombre_variable }.

//* Si se necesita capturar sólo una propiedad del objeto, no es necesario dejar el espacio con una --  , ---, simplemente se escogen las propiedades
//* a desestructurar y se dejan entre las llaves sin más.
const persona1 = {
    nombre: 'Felipe',
    apellido: 'Castañeda',
    edad: 24,
};

const {nombre: nombrePer1, apellido: apellidoPer1, edad: edadPer1} = persona1;
console.log('Destructuring para Objetos: ','Nombre/'+nombrePer1,'  Apellido/'+apellidoPer1,'  Edad/'+edadPer1);

//? Si queremos individualizar una cantidad de propiedades y agrupar el resto, el spread operator funciona de la misma manera:
const persona2 = {
    nombre: 'Felipe',
    apellido: 'Castañeda',
    edad: 24,
};
const {nombre:nombrePer2, ...restoPersona2} = persona2;
console.log('Destructuring para Objetos: ','Nombre/',nombrePer2,'  Apellido-Edad/'+restoPersona2.apellido,restoPersona2.edad);

//! Ejemplo si el objeto contase con un subobjeto:

const persona3 = {
    nombre: 'Felipe',
    apellido: 'Castañeda',
    edad: 24,
    direccion: {
        calle: 'Calle 01',
        codigoPostal: 170001
    }
};

const { nombre, direccion: { calle,codigoPostal } } = persona3;

//? Si llega el caso que hayan varios niveles de objetos dentro de otros objetos, se puede manejar la siguiente sintaxis
//? pero no es muy recomendable por lo que no genera buena legibilidad de lo que se está haciendo.

//? Las variables que queden, en este caso (coloreadas), son las que van a recibir los datos, es importante saber que no importa
//? que las variables estén dentro de un subobjeto, para poderlas llamar después simplemente se llama al nombre que se le dio a la variable y ya

//* const { nombre, direccion: { objeto: { objeto: {''} } } } = persona3;
 

console.log('Destructuring para Objetos con Subojetos: ','Nombre/'+nombre,'Dirección/Calle/',calle,'Dirección/Código Postal/',codigoPostal);



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
//! Trucos y Usos Habituales del Destructuring
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


//? Cuando tenemos unas variables a las cuales necesitemos cambiar el valor de cada una entre sí:
let nombreT = 'Felipe';
let apellidoT = 'Castañeda';

console.log('Cambio de Valores Inicial: ',nombreT,apellidoT);

[nombreT,apellidoT] = [apellidoT,nombreT];

console.log('Cambio de Valores Entre Sí: ',nombreT,apellidoT);


//? Destructuring en funciones
const personaFunc = {
    nombre:'Felipe',
    apellido:'Castañeda',
    edad:24,
    direccion: {
        calle:'Falsa 123',
        ciudad:'Manizales',
        pais:'Colombia'
    },
};

//* Directamente en los parámetros de la función, colocamos las llaves indicando los nombres de las propiedades a rescatar del objeto
//* posterior a ésto, podemos acceder dentro de la función a ellos
function getFullName({nombre,apellido}){
    return `${nombre} ${apellido}`;
}

console.log('Destructuring para Funciones: ',getFullName(personaFunc));


//? Destructuring en el (return)
function getSalary(){
    return [970,1020,980,1112]; //? Acá podemos ver que la función en este caso devuelve un array de salarios
}

const [salario1, salario2, salario3, salario4] = getSalary(); //? Podemos desestructurar el array del return 

console.log('Destructuring en el Return: ',salario1, salario2, salario3, salario4);
