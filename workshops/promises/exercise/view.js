class View {
  loadPeople() {
    const something = fetch('https://async-workshops-api.herokuapp.com/people');

    console.log(something); // what is this?
  }
}

module.exports = View;