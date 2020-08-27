const x = 'obj1';
const c = '3.14';
const pi = Math.PI;

// var y = new Object(); // same as below
var y = {
  v1:10,
  v2:20,
  f1() {},
  f2(arg1) { return 'hello world - f2 '+ arg1},
  f3:(arg1)=>{ return 'hello world - f3 '+ arg1},
  f4:() => 'hello world - f4',
  f5:(arg1)=>{ return 'hello world - f3 ', arg1}, //returns arg1 onlyd
  [x]:99,
  c2: c,
  pi, //works same as abve, pi: pi is not needed as both are same name
};

console.log(y.x);       // undefined
console.log(y.obj1);   // 99, dynamic ref assignment, [x] is replaced by obj1 in runtime

console.log(y.f1());    // undefined
console.log(y.f1);      // [Function: f1] - reference of function
console.log(y.f3(101)); //hello world - f2 101
console.log(y.f2(100)); //hello world - f2 100
console.log(y.f4());   //hello world - f4
console.log(y.f5(100)); // 100
console.log(y.c2);        //3.14
console.log(y.pi);       //3.1416...


// -- create objects using constructer function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car('Eagle', 'Talon TSi', 1993);

console.log(mycar);
