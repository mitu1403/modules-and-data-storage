# Data Storage Integration

- A shopping cart is created to handle Events with parameters.
- Using Local Storage to store data.
- Displaying saved cart from local storage.
- Removing item from local storage.
 
<br/> <br/> <br/>


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

