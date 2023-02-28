class CounterModel {
  constructor() {
    this.counter = 0;
    console.log('Verfiying message logged')
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }
}

module.exports = CounterModel;
