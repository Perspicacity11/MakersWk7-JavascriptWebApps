class NotesModel {

    constructor() {
        this.notesArray = [];
    };

    getNotes() {
        return this.notesArray;
    };

    addNote(note) {
        this.notesArray.push(note)
    }

    reset() {
        this.notesArray = []
    }
}

module.exports = NotesModel;  