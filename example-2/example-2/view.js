class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(text) {
    const pElement = document.createElement('p');
    pElement.textContent = text;
    this.mainContainerEl.append(pElement);
  }

  clearParagraphs() {
    let allParas = document.querySelectorAll('p')
    for (let index = 0; index < allParas.length; index++) {
      allParas[index].remove()
    }
  }
}

module.exports = View; 