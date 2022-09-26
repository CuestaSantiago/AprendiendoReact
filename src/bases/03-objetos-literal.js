const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
};


console.log({persona});
console.table(persona);

// no se debe asignar así const persona2 = persona;
const persona2 = {...persona};
persona2.nombre='Legolas'
console.log(persona2);
console.log(persona);