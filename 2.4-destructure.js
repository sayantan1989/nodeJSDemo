/* use of de-structuring */


// -- 1 . use to get elements from objects
/* const PI = Math.PI;
   const SQRT2 = Math.SQRT2;
   const E = Math.E;
*/
const { PI , E, SQRT2 } = Math;

console.log(PI);
console.log(SQRT2);



const circle = {
  label:'this is circle',
  radius:2,
  type:'Shape'
};

// -- 2 - use to ease handling of objects in arguments
const circleArea1 = (radius) => (PI*radius*radius);
console.log(circleArea1(circle.radius));

// same as above, note we an pass entire circle object here,radius will be picked from circle
const circleArea2 = ({radius}) => (PI*radius*radius);
console.log(circleArea2(circle));



// another arg using { } for precesion { precision = 4 } ={}  in area, note 4 is default
const circleArea3 = ({radius},{ precision = 4} ={} ) => (PI*radius*radius).toFixed(precision);
console.log(circleArea3(circle));
console.log(circleArea3(circle, { precision : 6 })); // now 4 is over ridden with 6

// --3. use in arrays

const [v1,v2,,v4] = [1,2,3,4];
console.log(v1); // 1
console.log(v4); //4

const [x1, ...restItems ] = [1,2,3,4];
console.log(restItems); // [ 2.3.4]

const  { label, ...cproperty } =  circle; //note name label has to match, ...cproperty can be anything
console.log(label);
console.log(cproperty);

// create new array or object out of ...cproperty
const arrayProp = cproperty;
const newObjProp = {
  cproperty,
};
console.log(arrayProp);
console.log(newObjProp);
