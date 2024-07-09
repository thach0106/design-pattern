class Counter {
  static _instance: Counter;
  counter: number;

  constructor() {
    this.counter = 0;
  }

  static getInstance() {
    if (!Counter._instance) {
      Counter._instance = new Counter();
    }

    return Counter._instance;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}

const counter1 = Counter.getInstance();
const counter2 = Counter.getInstance();
counter1.increment()
counter1.increment()
counter1.increment()
counter2.decrement()

console.log(counter1 === counter2);
console.log(counter2.counter, counter1.counter, counter1.counter === counter2.counter);
