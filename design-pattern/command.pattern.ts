/**
 * Complexity: 

Popularity: 

Usage examples: The Command pattern is pretty common in TypeScript code. 
Most often it’s used as an alternative for callbacks to parameterizing UI elements with actions. 
It’s also used for queueing tasks, tracking operations history, etc.

Identification: The Command pattern is recognizable by behavioral methods in an abstract/interface type (sender) 
which invokes a method in an implementation of a different abstract/interface type (receiver) which has 
been encapsulated by the command implementation during its creation. 
Command classes are usually limited to specific actions.
 */
interface OrderType {
  customer: string;
  id: string;
}

type ExecuteFnType = (...args: any) => any;

class Command {
  executeFn: ExecuteFnType;

  constructor(executeFn: ExecuteFnType) {
    this.executeFn = executeFn;
  }
}

class OrderManager {
  #orders: Array<OrderType>;

  constructor() {
    this.#orders = [];
  }

  execute(command: Command) {
    this.#orders = command.executeFn(this.#orders);
  }

  getOrder() {
    console.log(this.#orders);
  }
}

function placeOrdersCommand(...placeOrders: Array<OrderType>) {
  const addOrder = (orders: Array<OrderType>) => {
    orders.push(...placeOrders);
    return orders;
  };
  return new Command(addOrder);
}

function cancelOrderCommand(orderId: string) {
  const cancelOrder = (orders: Array<OrderType>) => {
    return orders.filter((order: OrderType) => order.id !== orderId);
  };

  return new Command(cancelOrder);
}

const manager = new OrderManager();

manager.execute(
  placeOrdersCommand(
    { customer: "Pad Thai1", id: "1" },
    { customer: "Pad Thai2", id: "2" }
  )
);
manager.execute(cancelOrderCommand("2"));
manager.getOrder();
