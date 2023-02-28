/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    // This is universal for these tests, so it could go before.each (it just loads the HTML into a variable to be tested)

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input')
    inputEl.value = 'Test message input 1'
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('div#message').innerText).toEqual('Test message input 1')
  });

  it('removes the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const secondButton = document.querySelector('#hide-message-button');
    secondButton.click();

    expect(document.querySelector('#message')).toBeNull();
  })
}); 