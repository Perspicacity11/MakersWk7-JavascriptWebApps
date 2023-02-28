/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('adds a paragraph', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    let view = new View();
    view.addParagraph('Paragraph text for testing purposes')

    expect(document.querySelectorAll('p').length).toBe(3)
  })

  it('removes all paragraph', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    let view = new View();
    view.addParagraph('Paragraph text for testing purposes')
    view.clearParagraphs()
    
    expect(document.querySelectorAll('p').length).toBe(0)
  })


});