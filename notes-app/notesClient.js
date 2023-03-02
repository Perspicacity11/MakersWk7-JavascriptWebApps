class NotesClient {
    loadNotes(callback) {
        fetch('http://localhost:3000/notes')
          .then(response => response.json())
          .then(response => {callback(response)});
      }

    createNote(data) {
        fetch('http://localhost:3000/notes', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)})
          .then((response) => response.json())
          .then((response) => {console.log("Success:", response)})
          .catch((error) => {console.error("Error:", error)});
      }
    }





module.exports = NotesClient;