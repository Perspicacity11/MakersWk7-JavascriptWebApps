(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.secondButton = document.querySelector("#hide-message-button");
          this.secondButton.addEventListener("click", () => {
            this.removeMessage();
          });
        }
        displayMessage() {
          let messageInput = document.querySelector("#message-input").value;
          let divEl = document.createElement("div");
          divEl.id = "message";
          divEl.textContent = messageInput;
          let body = document.querySelector("body");
          body.append(divEl);
        }
        removeMessage() {
          let messageToRemove = document.querySelector("div#message");
          messageToRemove.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
