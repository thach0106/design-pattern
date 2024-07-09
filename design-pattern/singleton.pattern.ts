let counter = 0;

class Counter {
  static _instance: Counter;

  constructor() {
    if (Counter._instance) {
      return Counter._instance;
    }
    Counter._instance = new Counter();
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1 === counter2);