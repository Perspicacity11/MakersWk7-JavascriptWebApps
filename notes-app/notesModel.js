class NotesModel {

    constructor() {
        this.notesArray = [];
    };

    getNotes() {
        // let notes = this.notesArray.forEach(element => console.log(element))
        // return notes

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