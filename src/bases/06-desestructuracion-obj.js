/* eslint-disable react-hooks/rules-of-hooks */
//desestructuracion 
//Asignación Desestructurante 
const persona={
    nombre:'Tony',
    edad:45,
    clave:'Ironman'
};
/*
const {nombre}= persona;
console.log(nombre)
*/
// const {nombre:nombre2, edad, clave}= persona;
// console.log(nombre2);
// console.log(edad);
// console.log(clave);


// const retornaPersona=(usuario)=>{
//     console.log(usuario)
// }

// const retornaPersona=({nombre, edad})=>{
//     console.log(nombre, edad)
// }

const useContext =({clave, edad})=>{
    return{
        nombreClave:clave,
        anios:edad,
    }
}
const {nombreClave, anios} = useContext(persona);
// console.log(avenger)
console.log(nombreClave, anios)