/* read file in synchonous way */
const fs = require('fs');
const path = require('path');

const file1 = 'readMe.txt';
const filePath1 = path.resolve( __dirname, file1); //to make it OS indepoendent

const data = fs.readFileSync(filePath1);

console.log('File data is', data); // prints first
console.log('TEST'); // prints after above
