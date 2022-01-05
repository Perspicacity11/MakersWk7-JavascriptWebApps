# Testing the page content

## Objectives

 * Write a test to check the web page updates.

In the previous section, we've learned how to modify dynamically the elements on
the page. But how we do test that we're doing the right changes, and that the
page is looking like it should?

We can that, once again, with Jest. You may now have a look at the file
`view.test.js` in the provided exercise directory:

```js
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
});
```

(You may run `jest` to verify that this test passes correctly, before moving on)

There's a lot going on in this file. Let's break it down:
 * we set `document.body.innerHTML` to have the same content of the "real" web
   page (that is because Jest "mocks" the HTML content internally).
 * in the test, we use `document.querySelectorAll` to get the list of all
   paragraph `<p>` elements — like you've done manually in the previous
   exercise.
 * we assert there should be **2 paragraphs** in total.

## Exercise - testing the `addParagraph` method

### Questions

1. Add a test covering the method `addParagraph` created in the previous
   section. This test should call the new method and then check that there are
   **three** paragraphs in the document.

### Troubleshooting common problems

 * Make sure you first call `view.addParagraph()` in your test **before**
   asserting the number of paragraphs. 



[Next Challenge](09_adding_new_note.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_testing_page_content.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_testing_page_content.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_testing_page_content.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_testing_page_content.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_testing_page_content.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
