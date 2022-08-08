class TodoView {
  constructor() {
    // Nothing interesting here... yet.
  }

  addItem(title) {
    const d = document.createElement('div');
    d.textContent = title;
    d.className = 'todo-item'
    document.querySelector('#todo-list').appendChild(d);
  }
}

module.exports = TodoView;