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

/* createInstance(Lion).keeper.nameTag = 'nameTag';
createInstance(Bee).keeper.hasMask = 'hasMask';
createInstance(Bee).numLenas = 12; */

// 交叉类型: 交叉类型是将多个类型合并为一个类型
function extend<T, U>(first: T, second: U): T&U { // 交叉类型
  let result = {} as T&U
  for(let id in first) {
    first[id] = result[id]
  }

  for(let id in second) {
    if (!result.hasOwnProperty(id)) {
      second[id] = result[id]
    }
  }
  return result;
}

class Person {
  constructor(public name: string) {

  }
}

interface Loggable {
  log(): void
}

class ConsoleLogger implements Loggable {
  log() {
    // 
  }
}

let jam = extend(new Person('jam'), new ConsoleLogger());
var n = jam.name;
jam.log();

// 联合类型: 联合类型表示一个值可以是几种类型之一
function padLeft(value: string, padding: number | string) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }

  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number got ${padding}`);
}

padLeft('Hello world', 2);

interface Bird {
  fly()
  layEgg()
}

interface Fish {
  swim()
  layEgg()
}

function getSmallPet(): Fish | Bird {
  return;
}

let pet = getSmallPet();

if (isFish(pet)) {
  pet.fly();
} else {
  pet.swim();
}

function isFish(pet: Fish | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined;
}
