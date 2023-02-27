const NotesModel = require('./notesModel')

describe("Notes app model class", () => {

it("returns an empty array of notes", () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([])
})

it("returns an array of two notes", () => {
    const model = new NotesModel();
    model.addNote('Buy milk')
    model.addNote('Go to the gym')
    expect(model.getNotes()).toEqual(['Buy milk' , 'Go to the gym'])
})

it("returns an empty array after two notes are added and then reset", () => {
    const model = new NotesModel();
    model.addNote('Buy milk')
    model.addNote('Go to the gym')
    model.reset()
    expect(model.getNotes()).toEqual([])
})

})