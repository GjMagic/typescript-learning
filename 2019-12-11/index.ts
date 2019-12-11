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