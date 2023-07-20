const html = document.querySelector('h2')?.innerText

//describe type by using interface
interface User {
  name: string,
  id: number
}

//then describe an object from interface by using " : TypeName"
const user: User = {
  name: "hieu dep trai",
  id: 2396
}

//use interface to create specific params and return values to function
const myFunction = (user: User) => {
  console.log(user);
}
// function getAdminUser(): User {
//  console.log(user: User);

// }

myFunction({ name: "hieu dep trai", id: 2396 })

//Composing Type: Khai báo định dạng 

//Union: Có thể khai báo bất kỳ type nào
type MyBool = true | false;

//popular use-case
type WindowStates = "open" | "close" | "minimize"
type LockStates = "locked" | "unlocked"
type PositiveNumberUnderTen = 1 | 3 | 5 | 7 | 9

//Handle different type 
const getLength = (obj: string | string[]) => {
  return obj.length
}

//make  diffent return depending on params' type
const wrapInArray = (obj: string | string[]) => {
  if (obj === 'string') {
    return obj
  }
  return obj
}
//============================================

//Generics: Cung cấp nhiều loại type.
//A common example is an array.
//Array can contain anything without generics. Generics help array discribe values contained

type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>

//Declare your own type 
interface Backpack<Type> {
  add: (obj: Type) => void
  get: () => Type
}

// Thông báo typescript biết có biến backPack
declare const backpack: Backpack<string>

const object = backpack.get() //object is a string because we declare it above

backpack.add('Hieu') //cannot pass number into the add function

//================================================================

//Structure stype system

interface Point {
  x: number,
  y: number
}

function logPoint(p: Point) {
  console.log(`${p.x},${p.y}`);
}

const point = { x: 12, y: 26 }
logPoint(point)
//1. point is never declared to be a Point type =>Typescript compares the shape of 
//point to the shape of Point => same shape => code passses 

//2. Chỉ tập hợp con trong shape của object mới được so sánh
//VD: 
const point2 = { x: 12, y: 26, z: 20 }
logPoint(point2) // logs: 12, 26 

const point3 = { x: 40, y: 22, width: 30, height: 50 }
logPoint(point2) // logs: 40, 22

// const color = { hex: "#187ABF"  }
// logPoint(color) // => error: {hex: string}

//==========================================

//There is no different between how classes and objects conform to shapes: 
class VirtualPoint { 
  x: string
  y: number

  constructor (x: string,y: number) { 
    this.x = x
    this.y = y
  }
}
