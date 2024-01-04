console.log(document)

//ejercicio 1
const titulo = document.getElementById("titulo");

//ejercicio 2
let tituloPrincipal = titulo.textContent = "Frutas";

//ejercicio 3
const cambioNaranja = document.querySelectorAll(".naranja");
cambioNaranja.forEach(element => {
  element.style.color = "orange";
});

//ejercicio 4
const pie = document.getElementById("pie");
pie.textContent += " - Nicolas Ceballos y Cohort N° 53";

//ejercicio 5
const contenedorNuevo = document.querySelector("main");
contenedorNuevo.innerHTML += "<div id='contenedor'></div>";

const mostrarContenido = document.getElementById("contenedor");
console.log(mostrarContenido);

//ejercicio 6
function crearCard(nombre, foto, descripcion){
    return `<div class="card">
            <h3>${nombre}</h3>
            <img src="${foto}" alt="">
            <p>${descripcion}</p>`        
}

console.log(crearCard("nico", "foto", "lalalalala"));

//ejercicio 7
function crearCardDeFruta(frutera){
    let guardarFrutas = "";
    for (const cadaFruta of frutera){
        guardarFrutas += crearCard(cadaFruta.nombre, cadaFruta.foto, cadaFruta.descripcion);
    }
    return guardarFrutas;
}

//ejercicio 8
console.log(crearCardDeFruta(frutas));

//ejercicio 9
const nuevoDiv = document.createElement("div");
nuevoDiv.id = "lista";
document.querySelector("main").appendChild(nuevoDiv);

const tituloLista = document.createElement("h3");
tituloLista.textContent = "Frutas Dulces";
nuevoDiv.appendChild(tituloLista);

//ejercicio 10
function crearListaFrutasDulces(frutas){
    const crearUL = document.createElement("ul");
    frutas.forEach(fruta => {
        if(frutas.esDulce == true){
            const crearLI =document.createElement("li");
            crearLI.textContent = fruta.nombre;
            crearUL.appendChild(crearLI);
        }
    })
    return crearUL;
}

//ejercicio 11
console.log(crearListaFrutasDulces(frutas));