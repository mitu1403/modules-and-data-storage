# Import & Defaults

import React from 'react'; // it means this is coming from a built in package(node-modules)

import Watch from './components/Watch'; // this is coming from component folder

### if want to export multiple functions from a file then need to export as an Object like the calculate.js file
const adding = (first, second) =>{
  return first + second ;
}
const multiply = (first, second) =>{
  return first * second ;
}
export {adding, multiply}


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
