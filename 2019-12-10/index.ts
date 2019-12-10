// 类类型
interface ClockInterface {
  currentTime: Date

  setTime(d: Date)
}

interface ClockConstructor {
  new(h: number, m: number)
}

class Clock implements ClockInterface {
  currentTime: Date
  constructor(h: number, m: number) {
    
  }
  setTime(d: Date) {
    this.currentTime = d;
  }
}

// 继承
interface Name {
  name: string
}

interface Color {
  color: string
}

interface Age extends Name, Color {
  age: number
}

let ted = {} as Age;
ted.name = 'ted';
ted.color = 'red';
ted.age = 12;

// 混合类型
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = (function(star: number) {

  }) as Counter;
  counter.interval = 123;
  counter.reset = function() {

  }

  return counter;
}

let c = getCounter();
c(10);
c.interval = 122;
c.reset()
