# Testing the page content

## Objectives

 * Write a test to check the updates to the web page.

In the previous section, we've learned how to modify dynamically the elements on
the page. But how we do test that we're doing the right changes, and that the
page is looking like it should?

We can do that, once again, with Jest. We've been ignoring it up until now, but
have a look at `view.test.js` in the provided exercise directory:

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
* There is [a JSDoc comment](https://jsdoc.app/about-getting-started.html) at
  the top of the file. This tells Jest that the code we are testing is
  intended to be run in a browser, even though the tests themselves are running
  with node.
* We `require` our View class, as well as Node's built-in `fs` module, which
  lets us read non-JavaScript files.
* We set `document.body.innerHTML` to have the same content of the "real" web
  page (that is because Jest "mocks" the HTML content internally).
* We use `document.querySelectorAll` to get the list of all
  paragraph `<p>` elements — like you've done manually in the previous
  exercise.
* We assert that there should be **2 paragraphs** in total.

## Exercise - testing the `addParagraph` method

### Questions

1. Add a test for the `addParagraph` method we created in the previous
   section. The test should call `addParagraph` and then check that there are
   now **three** paragraphs in the document.

### Troubleshooting common problems

* Use the existing test as a template.
* Make sure you first call `view.addParagraph()` in your test **before**
  asserting the number of paragraphs.



[Next Challenge](09_adding_new_note.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_testing_page_content.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_testing_page_content.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_testing_page_content.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_testing_page_content.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_testing_page_content.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
