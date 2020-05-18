/*console.log("Hola mundo desde JavaScript");
DOM
 querySelector = Devuelve solo un elemento.

let tabla = document.querySelector(".table");
console.log(tabla);

el querySelectorAll = devuelve varios elementos.
let links = document.querySelectorAll("a")
console.log(links);

recorer un arreglo

links.forEach(function(link){
    console.log(link);
})

//Los Eventos 

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })
}); */


// obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

// Recorrerlos

links.forEach(function(link){

// Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        // Quitar las clases de animacion que ya tiene
        content.classList.remove("animate__flipInX");
        content.classList.remove("animate__animated");

        // Agregar clases para animar su salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/Boletines";
        },600);
        

        return false;
        
    })
});