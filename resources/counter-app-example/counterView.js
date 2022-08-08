class CounterView {
  constructor(model) {
    this.model = model;

    const incrementButtonEl = document.querySelector('#increment-btn');
    
    incrementButtonEl.addEventListener('click', () => {
      // Increment on the model, then refresh the view
      this.model.increment();
      this.display();
    });
  }

  display() {
    document.querySelector('#counter').textContent = this.model.getCounter();
  }
}

module.exports = CounterView;