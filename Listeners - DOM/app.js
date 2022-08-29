/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


// ! Segunda forma de implementar los listeners

const blog_title = document.getElementById('blog_title');

function clickTitle(){
    console.log('The user has clicked the blog title!');
}

blog_title.onclick = clickTitle;


// ! Segunda forma de implementar los listeners

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

// ! Tercera forma de implementar los listeners - La más recomendable por buenas prácticas


const form_title = document.getElementById('form_title');

function clickTitle(){
    console.log('The user has clicked the form title!');
}

form_title.addEventListener('click', clickTitle);

/* form_title.removeEventListener('click', clickTitle); */ //? <--- Con esta sintaxis podemos eliminar el listener, debemos tener en cuenta que sólo funciona cuando se pasa el nombre de la función en el segundo parámetro, por lo cual, cuando tenemos funciones genéricas dentro de este parámetro no funcionaría por temas de SCOPE.


// ! Tercera forma de implementar los listeners - La más recomendable por buenas prácticas


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


// * Listado de Eventos más utilizados

//! DOMContentLoaded
//? Cuando manejamos la sintaxis  --   document.   -- estamos mencionando al documento HTML entero.
//? Este evento lo utilizamos cuando necesitamos implementar código/funcionalidades al momento de la carga del documento HTML
document.addEventListener('DOMContentLoaded', () => {
    console.log('The document has been loaded succesfully!')
});

//! Submit
//? Hay unos eventos en particular, incluyendo éste, que realizan acciones por defecto. En este caso, el evento submit
//? recarga la página imediatamente es enviado el formulario. Nosotros podemos evitar este comportamiento nativo del 
//? navegador con el método .preventDefault();

const form = document.querySelector('#form');

const sendForm = (event) => {
    event.preventDefault();

    const { name, email, password } = event.target; //? Esta sintaxis es "destructuring".

    console.log(name.value, email.value, password.value);
};

form.addEventListener('submit', sendForm);