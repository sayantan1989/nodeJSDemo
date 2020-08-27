/* sort arbitary large array asynchronously using using worker threads*/


var noOfElements; // size of array
var sizeOfElement; //size of an element
const array1 = new Array(); // array1
const array2 = new Array(); // array 2


const workerFarm = require('worker-farm')
const filePath = require('path').resolve( __dirname, '6.2-sortAsyncWorkerThread.js')
const sortAsyncFunc = workerFarm(require.resolve(filePath));


initialize();

var startTime = new Date().getTime();

//array1.sort();
//call sort of array in a new thread
// receives err - error returned , execTime1 - execution time, a1 - sorted array1
console.log('Sort of array1 started');
sortAsyncFunc(array1, function(err,execTime1,a1){
  console.log('Sort of array1 finished in : ',execTime1,'S');
})

//array2.sort();
//call sort of array in a new thread
// receives err - error returned , execTime1 - execution time, a2 - sorted array2
console.log('Sort of array2 started');
sortAsyncFunc(array2, function(err,execTime2,a2){
  console.log('Sort of array2 finished in : ',execTime2,'S');
  var endTime2 = new Date().getTime();
  console.log('Total execution time is: ', (endTime2-startTime)/1000,'S');
})

var endTime = new Date().getTime();
console.log('Call to sortAsyncFunc is done in : ',(endTime-startTime)/1000,'S');


function initialize(noOfElements,sizeOfElement) {
// build the array with random no's
noOfElements = 1000000; // 1 million
sizeOfElement = 1000000;
  for( let i =0; i<noOfElements;i++){
    array1[i] = Math.random()*sizeOfElement;
  }

  noOfElements = 1250000; // 1.25 million
  sizeOfElement = 1000000;
  for( let i =0; i<noOfElements;i++){
    array2[i] = Math.random()*sizeOfElement;
  }

}
