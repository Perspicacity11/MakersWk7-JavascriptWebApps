console.log("Notes app is running")

const NotesModel = require('./notesModel')

let model = new NotesModel
model.addNote('Walk the dog')
model.addNote('Cut the grass')
model.addNote('Feed the birds')

const NotesView = require('./notesView')

let view = new NotesView(model)
view.displayNotes() 