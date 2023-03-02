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

    setNotes(response) {
        this.notesArray.push(response)
    }
}

module.exports = NotesModel;  