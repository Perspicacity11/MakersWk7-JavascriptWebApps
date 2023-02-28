(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          console.log(this.mainContainerEl);
        }
        addParagraph(text) {
          const pElement = document.createElement("p");
          pElement.innerText = text;
          this.mainContainerEl.append(pElement);
        }
        clearParagraphs() {
          let allParas = document.querySelectorAll("p");
          for (let index = 0; index < allParas.length; index++) {
            allParas[index].remove();
          }
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
  view.addParagraph("This paragraph has been dynamically added by JavaScript as an argument!");
})();
