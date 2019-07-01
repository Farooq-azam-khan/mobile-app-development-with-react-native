# lecture 0
## JavaScript
- `syntax0.js`: 
```JS
const firstName = 'Farooq';
let lastName = "Khan"
var val = 42; 
```
- string can be single or double quotes, 
- semicolons are optional
- variables can be declared with `const`, `let`, `var`. 
    - `const` and `let` are scope dependent 
    - `var` is scope independent 
    - `const` cannot be change after declaration 
    - `let` and `var` can be changed after decleration 

## JS Syntax
## Types 
- Dynamic typing
- primitive types: no methods and immutable 
    - undefined, null, boolean, string, (symbol)

## Typecasting 
- coercion: act of changing types
- explicit vs. implicit
```JS
const x = 42; 
const explicit = String(x); 
const implicit = x + ""; 
```
- == vs. === 
    - == coerces the types 
    - === requres equivalent types 
- `typeof null` output is null? -> object 
    - cannot change to null because ES6 is backwards compatible
- which values are falsy?
    - `undefined, null, faslse, +0, -0, NaN, ""`; 
- which are truthy?
    - `true, `. 

## Types Demo
## Objects 
- Primitives vs. objects 

## Objects Demo
- `objectMutation[3|4].js`
## Object Mutation 
## Prtotypal Inheritance
- non-primitive types have a few properties/methods associated with them 
    - `Array.prototype.push()`
    - `String.prototpye.toUpperCase()`
    - ... 
## Scope 
## JS Engine 
## Global Object 
