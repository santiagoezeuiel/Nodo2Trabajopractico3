 import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";

 const archivoOriginal = './superheroes.txt';
 const archivoNuevos = './agregarsuperheroes.txt'; 


 //agregar nuevo superheroe
agregarSuperheroes(archivoOriginal, archivoNuevos);

//leer y mostrar la lista actualizada de superheroes ordenada

const superheroe = leerSuperheroes(archivoOriginal);
console.log('Superheroes ordenados 2');
console.log(superheroe);