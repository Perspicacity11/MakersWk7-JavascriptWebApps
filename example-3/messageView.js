class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.secondButton = document.querySelector('#hide-message-button')

    this.secondButton.addEventListener('click', () => {
      this.removeMessage();
    })
  }

  displayMessage() {
    // console.log('Thanks for clicking me!');

    let messageInput = document.querySelector('#message-input').value
    let divEl = document.createElement('div')
    divEl.id = 'message'
    divEl.textContent = messageInput
    let body = document.querySelector('body')
    body.append(divEl)
  }

  removeMessage() {
    let messageToRemove = document.querySelector('div#message')
    messageToRemove.remove()
  }
}

  

module.exports = MessageView; 