// 泛型
function identity<T>(arg: T): T {
  return arg;
}

// let output = identity<string>('String'); 
let output = identity('String') // 类型推断

function logIdentity<T>(arg: T[]): T[] { // T相当于任意类型
  console.log(arg.length);
  return arg;
}

// let myIdentity: <T>(arg: T) => T = identity 
// let myIdentity: { <T>(arg: T): T } = identity // 对象字面量形式

interface GneriIdentity<T> { // 泛型接口
  (arg: T): T
}

let myIdentity: GneriIdentity<number> = identity;

// 泛型类
class GneriNumber<T> {
  zeroValue: T
  add: (x: T, Y: T) => T
}

let myGneriNumber = new GneriNumber<number>()
myGneriNumber.zeroValue = 0;
myGneriNumber.add = function(x, y) {
  return x + y;
}

let myGneriString = new GneriNumber<string>()
myGneriString.zeroValue = 'string ';
myGneriString.add = function(x, y) {
  return x + y;
}

console.log(myGneriNumber.add(myGneriNumber.zeroValue, 2));
console.log(myGneriString.add(myGneriString.zeroValue, 'test'));

// 泛型约束
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg;
}
loggingIdentity({ length: 2 })

function getProperty<T, K extends keyof T>(obj: T,  key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a')
// getProperty(x, 'm')

function create<T>(c: { new(): T }): T {
  return new c();
}

class BeeKeeper {
  hasMask: string
}

class LionKeeper {
  nameTag: string
}

class Animal {
  numLenas: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: LionKeeper
}

function createInstance<T extends Animal>(c: new() => T) {
  return new c();
}

createInstance(Lion).keeper.nameTag;
createInstance(Bee).keeper.hasMask;
createInstance(Bee).numLenas;

// 类型推断

