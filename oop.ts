

//Excess Property Checks assertion
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
//
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     return {
//         color: config.color || "red",
//         area: config.width ? config.width * config.width : 20,
//     };
// }
// //error occur
// // let mySquare = createSquare({ colour: "red", width: 100 });
// // working correctly
// let mySquare1 = createSquare({ colour: "red", width: 100 } as SquareConfig);
// console.log(mySquare1)
// // Function Types
//
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
//
// let mySearch: SearchFunc;
//
// mySearch = function (source: string, subString: string): boolean {
//   let result = source.search(subString);
//   return result > -1;
// };

// Extending Interfaces
// interface Shape {
//   color: string;
// }
//
// interface PenStroke {
//   penWidth: number;
// }
//
// interface Square extends Shape, PenStroke {
//   sideLength: number;
// }
//
// let square = {} as Square;
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 5.0;
// ---------------------------------------------------------------------------------
// interface vs abstract class
//
// interface
// 1) interface support multiple implementations.
// 2) interface doesn't contain constructor.
// 3)interface can't have access modifiers.
// 4)by default everything is assumed as public.
// 5)interface contain only incomplete member.
// 6)Member of interface can't be static.
// 7)interface can extend from other interfaces.
// 8)An interface can extend multiple interfaces, creating a combination of all the interfaces.
//
// 9)Interfaces Extending Classes/
// When an interface type extends a class type it inherits the members of the class but not their implementations.
// 10)if you have 2 interfaces with  same name the implementations of interfaces will merge
//
//
// Abstract class
// 1)abstract class doesn't support multiple inheritance.
// 2)abstract class contains constructor
// 3)abstract class incomplete and complete members
// 4)abstract class can contain access modifiers for functions,properties.
// 5)only complete member of abstract class can be static
// 6)in front of abstract keyword can write protected
//
// type animal = typeof Animal
//
// function Decorator(metadata: string) {
//     console.log(metadata)
//     return (target: animal)=> {
//         console.log(target, 'target')
//         return target
//     }
// }
//
// @Decorator('Edo')
// class Animal{
//     constructor() {
//     }
// }


// class Base {
//     name = "base";
//     constructor() {
//         console.log("My name is " + this.name);
//     }
// }
//
// class Derived extends Base {
//     constructor() {
//         super();
//     }
//     name = "derived";
// }
//
// // Prints "base", not "derived"
// const d = new Derived();
// What happened here?
//
//     The order of class initialization, as defined by JavaScript, is:
//
// The base class fields are initialized
// The base class constructor runs
// The derived class fields are initialized
// The derived class constructor runs
// This means that the base class constructor saw its own value for name during its own constructor,
// because the derived class field initializations hadn’t run yet.


//Type Predicate
// interface Dog {
//     dog: string,
//     sound: string
// }
//
// interface Cat {
//     cat: string,
//     age: string
// }
//
// function animal(concreatAnmia: Dog | Cat): string {
//     if (predicate(concreatAnmia)) {
//         return 'Cat'
//     } else {
//         return 'Dog'
//     }
// }
//
// function predicate(animall: any): animall is Cat {
//     return typeof animall.cat !== undefined
// }
//
// console.log(animal({cat:'', age:''}))


// function Person(name, age) {
//     this.name = name;
//     this.age = age
//     this.a = function sayPerson() {
//         console.log(this.name)
//     }
// }
//
// function Student(name, age, faculty) {
//     Person.call(this, name, age)
//     this.faculty = faculty
// }
//
// const student = new Student('Joe', 23, 5)
// student.a()



//
// class SpacialAnimal {
//     constructor(public speacial: boolean) {
//     }
//     isSpecial(): boolean {
//         return this.speacial
//     }
// }

