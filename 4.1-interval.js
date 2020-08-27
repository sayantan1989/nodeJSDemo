
var counter = 0;
var timer = 1000;
const intervalTest = setInterval( ()=> {
counter ++;
timer = timer + 1000;
console.log('hello '+counter);
if ( counter == 5 ){
  console.log('done');
  clearInterval(intervalTest);
}
},timer
);
