/* use classes using declaration */
class  Vehicle{
  constructor(name) {
    this.name = name;  //no need to declare name1
  }
  init() {
    //this is template string, {this.name} is replaced with actual value in runtime
    console.log(`This is ${this.name}`);
    //console.log('This is ',this.name ); //- same as above
  }
}
console.log(Vehicle);

class Car extends Vehicle {  //name is inherited
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  init() { //init is over ridden
    console.log(`This is ${this.name} a ${this.type} Car`);
  }
}

class Suv extends Car {  //name is inherited
  weight = 2000; //public field
  #width = 1.85; //private field, can be used within a class
  constructor(name, type,bhp) {
    super(name);
    this.type = type; //instance properties
    this.bhp  = bhp;
      }
  init() { //init is over ridden
    console.log(`This is ${this.name} a ${this.type} Car`);
  }
  getTorque(){
    return this.bhp*2.5
  }
  getTorque2 = () => { return this.bhp*2.5 } // ok
  }
const o1 = new Vehicle("4-Wheeler");
const o2 = new Car("Tiago", "Petrol");
const o3 = new Car("I20", "Disel");
const o4 = new Suv("Pajero", "Disel",200);

o3.init = () => console.log(o3.name, 'is special' ); // over ridden again for o3

o1.init();
o2.init();
o3.init();

console.log(o4.getTorque()); //500
console.log(o4.getTorque2()); //NaN
console.log(o4.getTorque2()); //500

console.log(o4.weight); //2000
console.log(o4.width); //undefined
