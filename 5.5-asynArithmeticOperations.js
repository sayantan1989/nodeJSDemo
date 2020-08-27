/* async function to compute time consuming arithmetic operation*/
/* async call NE parallel processing !!!!*/

const util = require('util');


async function sum(x,y) {
    // some heavy prcessing
    for(var i=0;i<1e10/3;i++);
    var sum = x + y ;
    console.log('sum :',sum,' calculated');
    return Promise.resolve(sum);
    //return data;
}
// let data = await sum1(filePath1); - not possible, must be inside some async func
async function  compareSum(o1,o2) {
  /* prints he greater sum */
  //below 2 calls are not really called parallelly
  let sum1 = await sum(o1.x,o1.y); // first this gets executed in few sec
  let sum2 = await sum(o2.x,o2.y); // then this is executed in few sec
  console.log('sum1 :',sum1);
  console.log('sum2 :',sum2);
  ( sum1 > sum2 ) ? console.log(sum1) : console.log(sum2);
}

var sumObj1 = { x:2,y:3 };
var sumObj2 = { x:3,y:4 };

compareSum(sumObj1,sumObj2);
