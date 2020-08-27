/* differnt ways to decalre and call a function */
/* simple function */
/* anonymous function*/
/* function as a variable */
/* arrow function*/

this.id2="root scope test"; // bind some element to this object

// 1. --- normal function declataion and call, declare anywhere - hoisted
let x = sum1(1,2); // 1,2 , x==3

x = sum1(2);  // undefined,2 , x==NaN

function sum1(x,y){ //  function declaration, x,y are local to this block
var z = x + y;
console.log('Calling nomral function sum1 :',z); //3
return z;
}

// 2. --- anonymous function
( function(x,y){
console.log('Calling anonymous function :',(x+y) );
}(2,3));

// 3. --- function as a variable
// varSum(2,4); - error as varSum is not declared - not hoisted
var varSum = function (x,y) { // no function name i.e. anonymous function
   console.log('Sum is :' , (x+y));
   console.log('this normal / anonymous',this); //"this" here is the caller of varSum
   return x + y;
}
varSum(2,4); // 6

// 4. --- arrow function
// x = sum2(2,3); - error
const sum2 = ( x , y ) => {
  console.log('this in arrow function',this); //  // "this" here is NOT the caller of sum2
  return (x + y);
};
x = sum2(2,3);
console.log('Calling Arrow function : ',x);
