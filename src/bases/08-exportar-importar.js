//import {heroes} from './data/heroes'

import { heroes } from "../data/heroes"

export const getHeroeById= (id)=> heroes.find( (heroe) => heroe.id === id)

// console.log(getHeroeById(1))

export const getHeroesByOwner=(owner) =>  heroes.filter( (heroe) => heroe.owner.toUpperCase() === owner.toUpperCase())

// console.log(getHeroesByOwner("MarVel"))