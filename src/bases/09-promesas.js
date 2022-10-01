import { getHeroeById } from "../bases/08-exportar-importar";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     // console.log(heroe)
//       resolve(heroe)
//     // reject("No se pudo encontrar el heroe");
//   }, 2000);
// });

const getHeroeByAsync = (id)=>{
   return  new Promise((resolve, reject) => {
        setTimeout(() => {
          const heroe = getHeroeById(id);
          if (heroe) {
              resolve(heroe)
            }else { reject("No se pudo encontrar el heroe");}
        }, 2000);
      });
      
}

getHeroeByAsync(1)
//   .then((heroe)=>console.log(heroe))
  .then(console.log)
//   .catch((err) => console.warn(err));
  .catch(console.warn);
