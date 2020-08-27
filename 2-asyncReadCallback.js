/* use of call back nesting */
/* read file in async mode using callbacks, write to another file and print*/

const path = require('path');
const fs = require('fs');

//const files = ['C:\\Users\\i316810\\Documents\\Open Source 2020\\ngs\\myTest\\readMe.txt'];

const file1 = 'readMe.txt';
const file2 = 'readMecopy.txt';
const filePath1 = path.resolve( __dirname, file1);
const filePath2 = path.resolve( __dirname, file2);

// problem with callback, if you need some synchronous / dependent activity like
// copy file1 in to file2 then you have to nest it, if too many depencies come up
// then chain can be very deep a.k.a *****Pyrmid of Doom****
try{
fs.readFile( filePath1, 'utf8',function callBackF1(errF,data){
  if (errF !== null){ //if some error like file not found etc was returned
    console.log(errF);
    process.exit(0);
  }
  console.log(`${file1} reading complete - starting copy to file2`);
  //nest write callback
  fs.writeFile(filePath2,data,function callBackF2(errW){
    // you can nest more -- ex print copied file
    fs.readFile( filePath1, 'utf8',function callBackF3(errF,data){
      if (errF !== null){ //if some error like file not found etc was returned
        console.log(errF);
        process.exit(0);
      }
      console.log(`${file2} reading complete - file data is`);
      console.log(data);
    });
  });
});
}catch (err) {
console.log('Error in reading file');
}

console.log('File copy test');
