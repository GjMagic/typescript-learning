interface Lable {
  name: string
}

function student(name: Lable) {
  console.log(name)
}

student({ name: '小明' });

interface Square {
  color: string
  area: number
}

interface SquareConfig {
  color?: string
  area?: number
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'blue', area: 123 }
  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.area) {
    newSquare.area = config.area;
  }

  return newSquare;
}

let mySquare = createSquare({ color: 'yellow' })

console.log(mySquare)

interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }

let a: number[] = [1, 2, 3]
let ro: ReadonlyArray<number> = a;

a = ro as number[];

// 函数类型的接口
interface searchFunc {
  (src: string, sub: string): boolean
}

let mySearch: searchFunc;

mySearch = (src: string, sub: string) => {
  let result = src.search(sub);
  return result > 1;
}

// 可索引类型
interface stringArr {
  [index: number]: string
}

let arr: stringArr
arr = ['ted', 'nu']
let myArr = arr[0];

interface NumDic {
  [index: string]: number
  length: number
  // name: string
}

interface readonlyStrArr {
  readonly [index: number]: string
}

let strArr: readonlyStrArr = ['ted', 'dec'];
// strArr[0] = 'de';