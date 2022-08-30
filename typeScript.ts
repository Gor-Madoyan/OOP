//TypeScript
// abstract class Animal {
//   protected constructor(public name: string,
//                 public age: number,
//                 public spacialAnimal: SpacialAnimal) { };
//
//   abstract sayName(): string;
//    sayAge() {
//        return `I'm a dog my name is ${this.name}, I'm a spacial Animal - ${this.spacialAnimal.isSpecial()}`
//    }
// }
//
// class Dog extends Animal {
//     constructor(name: string,
//                  age: number,
//                 spacialAnimal: SpacialAnimal,
//                 public bark: boolean) {
//         super(name, age, spacialAnimal);
//     }
//
//     sayName(): string {
//         return this.name;
//     }
// }
//
// const dog = new Dog('King', 4, new SpacialAnimal(true), true)
// console.log(dog)
// console.log(dog.sayAge());


// interface Icolor {
//     color: string
// }
//
// class Color implements Icolor {
//     color: string = 'heee'
// }


// abstract class Animal {
//    protected constructor(public name, public age) {
//     }
//
//     makeSound = () => {
//         console.log('err Im animal')
//     }
//
//     fly() {
//         return 'animal'
//     }
// }
//
// class Dog extends Animal {
//     constructor(name, age) {
//         super(name, age);
//     }
//
//     eat(): void {
//         console.log(`My name is I ${this.name} I'm eat some food`)
//     }
// }
//
// const factoryAnimal = function <T>(c: new(name, age)=> T, name: string, age: number): T {
//     return  new c(name, age)
// }
// console.log(factoryAnimal(Dog, 'king', 2));

//Utility Types----------------------

// interface IUser {
//     name: string,
//     age: number,
//     occupation?: string
// }
//
// //Required
// const requiredUser: Required<IUser> = {
//     name: 'Joe',
//     age: 24,
//     occupation: 'Programmer' // this line is must have
// }
//
// //Partial
// const partialUser: Partial<IUser> = {
//     name: 'Joe',
// }
//
// //Pick
// const user: Pick<IUser, "name" | 'age' | "occupation"> = {
//     name: 'joe',
//     age: 48,
//     occupation: 'dad',// this field optional because of 246 line
// }
//
// //Omit
// const userOmit: Omit<IUser, "name"> = {
//     age: 47,
// }
//
// //Record
// // type Generation = "old" | "young"
// interface Generation {
//     old: any,
//     young: any
// }
//
// const recordUser: Record<keyof Generation, IUser> = {
//     old: {
//         name: 'Papik',
//         age: 77,
//         // occupation: 'retier'
//     },
//     young: {
//         name: "Erik",
//         age: 12,
//         occupation: 'schooler'
//     }
// }
//
// //menq karox einq anel ev verevi nshvac dzezvov ev 274 dzevov u 279 tuxum aranc keyof
//
//
// // The keyof type operator
// // The keyof operator takes an object type and produces a string or numeric literal union of its keys.
// // The following type P is the same type as “x” | “y”:
// interface IObj {
//     x: string,
//     y: number
// }
//
// type a = keyof IObj;
//
// const b: a = 'x'

// // typeOf
// const obj1 = {
//     hello: 'bye'
// }
//
// type obj2 = typeof obj1 //obj2 {hello: string};
//
// const obj3: obj2 = {
//     hello: ''
// }
// /////////
// const boo = {
//     name: 'Jone',
//     lastName: 'Doe',
//     age: 55
// }
//
// type goo = {
//     [key in keyof typeof boo]: boolean
// }
//
// function foo(): goo {
//     return {
//         name: true,
//         lastName: false,
//         age: false
//     }
// }

//// assertion

// interface Icolor {
//     red: string,
//     green: string,
// }
// this two line are the same;
// const colors: Icolor = {} as Icolor;
// const colors: Icolor = <Icolor>{};
// colors.red = 'red'

///////
// const obj = {
//     name: 'Joe',
//     age: 24
// }
//
// const arrKeys = Object.keys(obj) // string[];
// const arrKeys2 = <Array<keyof typeof obj>>Object.keys(obj);// ('name'|'age')[]


// when dealing with HTML elements; sometimes

// function merge<T extends object, V extends  keyof T>(a: T, b: V): T[V] {
//     return a[b]
// }
// const a = merge({name: "Joe"}, 'name');
// console.log(a)


// function foo<T extends object, U extends keyof T>(obj: T, b: T[U]): U | null{
//     const objValue = (Object.keys(obj) as U[])
//         .filter((val: U)=> (obj[val] == b) );
//     return objValue[0];
// }
//
// console.log(foo({a: "name"}, 'name'))
