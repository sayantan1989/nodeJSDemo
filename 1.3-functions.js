/* limittions of arrow functions */
"use strict";

console.log('-- limitation 1 : use if this --');

let me = {
 name: "Function",
 thisInArrow:() => {
   console.log("Example of " + this.name); //no 'this' binding here
 },
 thisInRegular(){
   console.log("Example of " + this.name); //'this' binding works here
 }
};
me.thisInArrow(); //Example of undefined
me.thisInRegular(); // Example of Function


console.log('-- limitation 2 : show arguments--');
let myFunc = {
 showArgs(){
   console.log(arguments);
 }
};
myFunc.showArgs(1, 2, 3, 4);


let myFunc2 = {
 showArgs2 : ()=> {
      console.log(arguments);
   }
};
//myFunc2.showArgs2(1, 2, 3, 4); //error-------------------------------

// limittaion 3
var cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}
cat.jumps();
console.log(cat.lives); //9
