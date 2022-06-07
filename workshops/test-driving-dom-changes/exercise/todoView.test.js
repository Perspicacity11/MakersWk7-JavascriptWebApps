/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const TodoView = require('./todoView');

describe('TodoView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('has zero todo items by default', () => {
    const _todoView = new TodoView();

    // Assert there are zero div.todo-item on the page
  });

  it('adds one todo item', () => {
    
  });
});