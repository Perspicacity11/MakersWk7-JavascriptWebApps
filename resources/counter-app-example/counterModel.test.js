const CounterModel = require("./counterModel")

describe('Counter model', () => {
  it('starts at 0', () => {
    const model = new CounterModel();

    expect(model.getCounter()).toBe(0);
  });

  it('increments by 1', () => {
    const model = new CounterModel();
    model.increment();

    expect(model.getCounter()).toBe(1);
  });
})