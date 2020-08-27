/* read file in async mode using callbacks*/
const path = require('path');
const fs = require('fs');

//const files = ['C:\\Users\\i316810\\Documents\\Open Source 2020\\ngs\\myTest\\readMe.txt'];

const file1 = 'readMe.txt';
//const file1 = 'readMe2.txt' //will return errF
const filePath1 = path.resolve( __dirname, file1);

// read file async mode, callBackF1 will get executed after readFileSync
// 1st arg err is error, then data etc
// for any async func like function callBackF1 the last argument "function callBackF1" is itself a function,
// a call back function
// it receives automatically it's argument from readFile, usally the first arg is error
// then data etc depeneding on what readFile returns
try{
fs.readFile( filePath1, 'utf8',function callBackF1(errF,dataD){ //(errF,dataD)=> also ok
  console.log('File data ', dataD);
  console.log(errF); //null if no error
  if (errF !== null){ //if some error like file not found etc was returned
    console.log(errF);
  }
});
console.log('test file read successfull -'); // this is get printed first
} catch(err){
console.log('Error in read');
}
