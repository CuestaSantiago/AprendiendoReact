const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola mundo`;
//saludar = 10;
// console.log(saludar('Goku'))
const getUser = () => ({
  uid: "Hola",
  username: "ElpapiDeLasNenas",
});

console.log(saludar2("Vegeta"));
console.log(saludar3("Goku"));
console.log(saludar4());

console.log(getUser());

//tarea
//1. transformar a funcion de flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas
/*
function getUsuarioActivo(nombre) {
  return {
    uid: "Hola",
    username: nombre,
  };}
const getUsuarioActivo = function(nombre){
    return{
        uid: "Hola",
    username: nombre
    }
}  
  
  */
const getUsuarioActivo = (nombre)=> ({
        uid: "Hola",
    username: nombre
    })

const usuarioActivo = getUsuarioActivo('Santiago');
console.log(usuarioActivo)
