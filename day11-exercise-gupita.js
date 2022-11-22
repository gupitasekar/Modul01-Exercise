const Queue = require("./day11_queue.js");

let foodOrder = new Queue();
foodOrder.enqueue("Ayam Goreng");
foodOrder.enqueue("Rendang");
foodOrder.enqueue("Tempe bacem");

foodOrder.executeOrder();
