/* use of promises to avoid callback nesting */
/* two scenarios */
const path = require('path');
const fs = require('fs');
const util = require('util');

const file1 = 'readMe.txt';
const file2 = 'readMecopy.txt';
const filePath1 = path.resolve( __dirname, file1);
const filePath2 = path.resolve( __dirname, file2);

// promisify any function
const readTextfunc = util.promisify(fs.readFile);
const writeTextfunc = util.promisify(fs.writeFile);
// const { readFile } = require('fs').promises; // fs and util dec not needed,


//-- scenario 1 - make a asyhc func out of readFile
// make a async func out of it
async function read(filePath) { //add async key-word
  const data = await readTextfunc(filePath,'utf8'); //works inside a async func
//  console.log('File data is', data);
    return Promise.resolve(data);
    //return data; // same as above,with async function return data is automatically wrapped inside
    // a promise
}
// let data = await read1(filePath1); - not possible, must be inside some async func
async function  print() {
  /* using await */
  let data = await read(filePath1);//wait until the promise settles and returns its result.
  console.log('Using await - filepath1 data is : ',data);

  /* alternative, you can use then */
  let promisedData = read(filePath1);
  promisedData.then((val)=>(console.log('Using promise.then -filepath1 data is :',val)));
}
console.log('filepath1 read started');
print(); //.then(console.log('filepath1 read started'));

// --- scenario 2 - read file1, copy to file 2,and read print file2
async function copyAndPrintData(){
  //call the function
  let file1 = await readTextfunc(filePath1,'utf8');
  let errorWrite = await writeTextfunc(filePath2,file1);
  let file2 = await readTextfunc(filePath2,'utf8')
  console.log('filePath2 data is :',file2);
}
console.log('Copy and print started');
copyAndPrintData();//.then(console.log('Copy and print started'));
