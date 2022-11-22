class Queue {
  #foodOrders = [];

  enqueue(food) {
    this.#foodOrders.push(food);
  }

  dequeue() {
    return this.#foodOrders.shift();
  }

  print() {
    console.log(this.#foodOrders);
  }

  executeOrder() {
    let order = 1;

    while (this.#foodOrders.length >= 1) {
      let min = 1,
        max = 10;
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      let delayInMilliseconds = rand * 1000;
      this.processOrder(delayInMilliseconds, order).then((result) =>
        console.log(result)
      );
      order++;
    }
  }

  processOrder(delayInMilliseconds, order) {
    return new Promise((resolve, reject) => {
      setTimeout(
        resolve(
          `Queue-${order}: ${this.dequeue()} DONE process -> ${delayInMilliseconds}`
        ),
        delayInMilliseconds
      );
    });
  }
}

module.exports = Queue;
