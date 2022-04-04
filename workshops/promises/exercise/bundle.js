(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        loadPeople() {
          const something = fetch("https://async-workshops-api.herokuapp.com/people");
          console.log(something);
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
  view.loadPeople();
})();
