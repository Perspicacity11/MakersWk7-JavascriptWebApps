const CounterModel = require("./counterModel");
const CounterView = require("./counterView");

const model = new CounterModel();
const view = new CounterView(model);
view.display();