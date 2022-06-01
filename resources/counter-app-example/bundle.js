(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // counterModel.js
  var require_counterModel = __commonJS({
    "counterModel.js"(exports, module) {
      var CounterModel2 = class {
        constructor() {
          this.counter = 0;
        }
        getCounter() {
          return this.counter;
        }
        increment() {
          this.counter++;
        }
      };
      module.exports = CounterModel2;
    }
  });

  // counterView.js
  var require_counterView = __commonJS({
    "counterView.js"(exports, module) {
      var CounterView2 = class {
        constructor(model2) {
          this.model = model2;
          const incrementButtonEl = document.querySelector("#increment-btn");
          incrementButtonEl.addEventListener("click", () => {
            this.model.increment();
            this.display();
          });
        }
        display() {
          document.querySelector("#counter").innerText = this.model.getCounter();
        }
      };
      module.exports = CounterView2;
    }
  });

  // index.js
  var CounterModel = require_counterModel();
  var CounterView = require_counterView();
  var model = new CounterModel();
  var view = new CounterView(model);
  view.display();
})();
