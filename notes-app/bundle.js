(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notesArray = [];
        }
        getNotes() {
          return this.notesArray;
        }
        addNote(note) {
          this.notesArray.push(note);
        }
        reset() {
          this.notesArray = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(model2) {
          this.mainContainerEl = document.querySelector("#main-container");
          this.model = model2;
        }
        displayNotes() {
          for (let index = 0; index < this.model.getNotes().length; index++) {
            const divElement = document.createElement("div");
            divElement.innerText = this.model.getNotes()[index];
            this.mainContainerEl.append(divElement);
          }
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  console.log("Notes app is running");
  var NotesModel = require_notesModel();
  var model = new NotesModel();
  model.addNote("Walk the dog");
  model.addNote("Cut the grass");
  model.addNote("Feed the birds");
  var NotesView = require_notesView();
  var view = new NotesView(model);
  view.displayNotes();
})();
