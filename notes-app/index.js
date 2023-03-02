console.log("Notes app is running")

const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const NotesClient = require('./notesClient')

const client = new NotesClient;

const model = new NotesModel
model.addNote('Walk the dog')
model.addNote('Cut the grass')
model.addNote('Feed the birds')


const view = new NotesView(model, client)
view.displayNotesFromAPI()
view.displayNotes() 