const NotesModel = require('./notesModel')

class NotesView {
    constructor(model) {
        this.mainContainerEl = document.querySelector('#main-container');
        this.model = model
    }


    displayNotes() {
        for (let index = 0; index < this.model.getNotes().length; index++) {
            const divElement = document.createElement('div');
            divElement.innerText = this.model.getNotes()[index];
            this.mainContainerEl.append(divElement);
        }
    }
}

module.exports = NotesView;