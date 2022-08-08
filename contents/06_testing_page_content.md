# Testing DOM updates

## Objectives

 * Write a test to check the updates to the web page.
 * Test-drive a feature for a frontend web application.

## Discovering one example

You've now learned how to dynamically modify the page. But how can we test that we're doing the right changes, and that the page is looking like it should?

We can do that, once again, with Jest. We've been ignoring it up until now, but
have a look at `view.test.js` in the directory `example-2`:

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

(You may run `jest` to verify that this test passes correctly, before moving on).

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

## Demonstration

[A video demonstration](https://www.youtube.com/watch?v=gncQzqAzpS4) of a coach test-driving a View class.

## Template for test-driving a `View` class method.

You can use this template when test-driving a `View` class — the structure will usually be the same: instantiate the view, call the code that makes changes on the page, and assert the page content.

```js
/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('A test for my web page', () => {

  // We can use the beforeEach() hook 
  // to set the jest `document` HTML before each test
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays a title', () => {
    // 1. Arrange - instantiate our View class
    const view = new View();

    // 2. Act - call any method that modifies the page
    // this method `displayTitle` would dynamically
    // set a <h1> title on the page with the given content
    view.displayTitle('My amazing website');

    // 3. Assert - we assert the page contains what it should.
    // Usually, you will use `.querySelector` (and friends)
    // here, and assert the text content, the number of elements,
    // or other things that make sense for your test.
    expect(document.querySelectorAll('h1').textContent).toBe('My amazing website');
  });
});
```

## Exercise one

1. Add a test for the `addParagraph` method we created in the previous
   section. The test should call `addParagraph` and then check that there are
   now **three** paragraphs in the document.

[Example solution](https://www.youtube.com/watch?v=phBzCmSkPAM)

### Troubleshooting common problems

* Use the template given above.
* Make sure you first call `view.addParagraph()` in your test **before** asserting the number of paragraphs.

## Exercise two

1. **Test-drive** (using the template given above) a new method on the view class, `clearParagraphs()`. This method should remove all paragraphs from the document.
2. **Implement** the `clearParagraphs()` method so your test passes.

[Example solution](https://youtu.be/phBzCmSkPAM?t=224)


[Next Challenge](07_adding_new_note.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F06_testing_page_content.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F06_testing_page_content.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F06_testing_page_content.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F06_testing_page_content.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F06_testing_page_content.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
