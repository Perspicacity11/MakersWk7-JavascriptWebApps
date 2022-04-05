(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // todoView.js
  var require_todoView = __commonJS({
    "todoView.js"(exports, module) {
      var TodoView2 = class {
        constructor() {
        }
      };
      module.exports = TodoView2;
    }
  });

  // index.js
  var TodoView = require_todoView();
  var view = new TodoView();
})();
