const NotesModel = require('./notesModel')

class NotesView {
    constructor(model, client) {
        this.model = model
        this.client = client
        // this takes the Model (data-storing and handling) class and its methods, so that I
        // can represent them on the page
        this.mainContainerEl = document.querySelector('#main-container');
        document.querySelector("#add-note-button").addEventListener('click', () =>{
            let newNote = document.querySelector('#note-input').value
            // this.addNote(newNote)
            this.client.createNote(newNote)
            this.displayNotes()
            document.querySelector('#note-input').value = ""
        })
        // the above is adding a trigger to the add note button and 1) saving the text
        // value of the input box to 'newNote', and then using the View's addNote method
        // to put it into the Model's array, using the Model's 'addNote' method below;
        // it then displays all the notes in the array before clearing the input box; 
        // the click therefore does four things in sequence
    }


    displayNotes() {
        document.querySelectorAll('.note').forEach(element => element.remove())
        // the above querySelectorAll grabs all elements with the class 'note' 
        // (which I'm adding to each element when it's created below) 
        // as an array of those elements, which then has to be iterated 
        // through and removed one by one, before all the notes are added again
        // (plus the new note) by the code below
        for (let index = 0; index < this.model.getNotes().length; index++) {
            const divElement = document.createElement('div')
            divElement.className = "note";
            divElement.innerText = this.model.getNotes()[index];
            this.mainContainerEl.append(divElement);
            // the above loops through the array of notes in the model (with getNotes), creates 
            // a new div for each of them, and then assigns the innerText of that div with
            // the text of the note at each index position in sequnce , before appending it to the 
            // main container
        }
    }

    addNote(newNote) {
        this.model.addNote(newNote)
    }

    displayNotesFromAPI() {
        this.client.loadNotes((response) => {
        this.model.setNotes(response);
        this.displayNotes();
        //the above uses the API call function from the client, and sets the callback function
        // as that anonymous method, taking the data from the API call, using it as the argument
        // for the model's setNotes function (which adds it to the main notes array) and then
        // returns the array contents; the whole thing is one function: loadNotes (with setNotes as
        //its callback)
    })
    }
}

module.exports = NotesView; 