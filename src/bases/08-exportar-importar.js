//import {heroes} from './data/heroes'

import { heroes } from "../data/heroes"

const getHeroeById= (id)=> heroes.find( (heroe) => heroe.id === id)

console.log(getHeroeById(1))

const getHeroesByOwner=(owner) =>  heroes.filter( (heroe) => heroe.owner.toUpperCase() === owner.toUpperCase())

console.log(getHeroesByOwner("MarVel"))