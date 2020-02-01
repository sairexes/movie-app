// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type Movie = {
  id?: number
  original_title?: string
  overview?: string
  poster_path?: string
  backdrop_path?: string
  title?:string
  description?:string
  poster?:string
}

export type VoidFunc = () => void
