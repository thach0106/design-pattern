/*
An observable object usually contains 3 important parts:
  observers: an array of observers that will get notified whenever a specific event occurs
  subscribe(): a method in order to add observers to the observers list
  unsubscribe(): a method in order to remove observers from the observers list
  notify(): a method to notify all observers whenever a specific event occurs
*/
type CallbackFn = (...args: Array<unknown>) => unknown;

class Observable {
  observers: (CallbackFn)[]

  constructor() {
    this.observers = [];
  }

  subscribe(func: CallbackFn) {
    this.observers.push(func);
  }

  unsubscribe(func: CallbackFn) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data: unknown) {
    this.observers.forEach((observer) => observer(data));
  }
}

new Observable();
