/* More with arrow function */

// short hand notation
let z = (x, y) => x + y; // gets x and y and argument and returns (x+y)
console.log('Calling short hand arrow function :',z(2,10));

// function f1 which returns true
f1 = () => true; //no param can be () or _
f2 = _ => false;
console.log('Calling f1 :',f1());
console.log('Calling f2 :',f2());

//console.log('calling f1 :',f1);
//console.log('calling f2 :',f2);
// --- more use of arrow functions
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// ES5, normal function to filter arr with mutiples of 3
var divisibleByThrreeES5 = arr.filter(function (v){
  return v % 3 === 0; //filter elements divisible by 3
});
console.log(divisibleByThrreeES5); // [3, 6, 9, 12, 15]

// ES6, function to filter arr with mutiples of 3
const divisibleByThrreeES6 = arr.filter(v => v % 3 === 0);
console.log(divisibleByThrreeES6); // [3, 6, 9, 12, 15]

//-- how not to use arrow function
var Foo = () => { return true};
//var foo = new Foo(); // TypeError: Foo is not a constructor
console.log(Foo.prototype); // undefined



var Foo2 = function retTrue () { return true };
var foo = new Foo2(); //ok

console.log(Foo2()); //true
//console.log(retTrue()); //undefinbed as it is out of scope
