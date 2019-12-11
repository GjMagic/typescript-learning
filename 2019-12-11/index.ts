class Animal {
  private name: string
  constructor(name: string) {
    this.name = name;
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance}m`)
  }
}

class Rinao extends Animal {
  constructor () {
    super('Rinao')
  }
}

class Person {
  protected name: string
  protected constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department;
  }

  getElevatorPitch(): string {
    return `Hello, my name is ${this.name} and I work in ${this.department}`;
  }
}

let ted = new Employee('ted', 'Sales');
// let bod = new Person('bob');
console.log(ted.getElevatorPitch())
// console.log(ted.name)

// 存取器
let passcode = 'secret passcode';
class Employees {
  private _fullName: string
  get fullName() {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode === 'secret passcode') {
      this._fullName = newName;
    } else {
      console.log('Error: err msg!')
    }
  }
}

let employee = new Employees();
employee.fullName = 'Bob Smith';
console.log(employee.fullName)

// 静态属性
class Grid {
  static origin = { x: 0, y: 0 }
  scale: number
  constructor(scale: number) {
    this.scale = scale;
  }
  calculateDistanceFromOrigin(point: { x: number, y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist*xDist + yDist*yDist) * this.scale;
  }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }))
console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }))

// 抽象类

abstract class Department {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  printName(): void {
    console.log(`Department name is ${this.name}`)
  }

  abstract printMeeting(): void
}

class AccountingDepartment extends Department {
  constructor () {
    super('Accounting')
  }
  
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am')
  }

  getReport(): void {
    console.log('get Accounting report')
  }
}

let department: Department;
department = new AccountingDepartment();
department.printMeeting();
department.printName();

interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}

// this
let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => { // 箭头函数保持创建时的this指向，function函数保持的是调用时的this指向
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker() // 全局globle调用函数上下文

console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);

interface UiElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
  type: string

  onClickBad = (e: Event) => {
    this.type = e.type
  }
}

let h = new Handler()

let uiElement: UiElement = {
  addClickListener() {

  }
}

uiElement.addClickListener(h.onClickBad)

let suits = ['hearts', 'spades', 'clubs', 'diamonds']
// 重载
// pickCard 方法根据传入参数的不同会返回两种不同的类型
function pickCard(x: { suit: string, card: number }[]): number
function pickCard(x: number): { suit: string, card: number }

function pickCard(x): any {
  if (Array.isArray(x)) {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  } else if (typeof x === 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 }
]

let pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

let pickedCard2 = pickCard(15)
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)