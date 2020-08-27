/* create custom callback function

funcDemo will accept any number print the number , return number and a incremented vaulue
for the callback function
*/
 function funcDemo(var1, callbackxyz) { // still not async
    console.log('in funcDemo');

    if (typeof callbackxyz == "function") {  //extra check
      callbackxyz(var1,var1+1);
    }
    else{
      throw new Error('invalid parameter passed');
    }
}

funcDemo(2, function cb(x,y){ // function cb is call function
  // -- any code here for callback function -- //
  console.log('callback invoked');
  console.log(x,y);
});

console.log('custom call back demo');
// funcDemo(2,3); //-error

// to-do - make funcDemo async like readFile !
