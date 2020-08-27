

const path = require('path');
const fs = require('fs');
const files = ['readMe.txt','abc2.txt'];

files.forEach( (file, i) => {
  try {
    // __dirname is current dir in windows
    const filePath = path.resolve( __dirname, file);
    // process.env.HOME is current dir in linux
    //const filePath = path.resolve( process.env.HOME, file);
    console.log('reading ..'+file+' at index '+ (i+1) );
    // 'utf8' encoding is optional, but results are not readable if not passed
    const data = fs.readFileSync(filePath,'utf8');
    console.log('File data is :', data);
  } catch (err) {

    // not correct - not cathing the context of error
    // console.log('code :' +err.code+' file not found');

    // ok - cathcing with context
    if(err.code === 'ENOENT'){ //find specific error ex file nor found
          console.log('code :' +err.code+' file not found');
    }else{
      console.log('code :' +err.code+' unknown error');
      //throw err; // throw original error again, like raising exception again
      // this will let the process exit and termination of program
    }
    
  }
});
