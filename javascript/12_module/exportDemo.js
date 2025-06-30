/*--------------------------------------- Module -----------------------------------------
Module - module containce variables and functions in external files and 
         that can be exported and imported into another js

Export - exporting variables or functions
Types of Export :
                    1. named export - In-line export and all at bottom
                    2. default export

Import - importing exported module
types of import: based on how module is exported
                    1. import from named export
                    2. import from default export

*/


/*----------------------------- example of named export --------------------------*/

export const a = 10;
export const b = 20;

const c = 30;
const d = 40;

export {c,d};

/*----------------------------- example of default export --------------------------*/
const demo = {
    id: 1,
    "name": "demoName"
}

export default demo;