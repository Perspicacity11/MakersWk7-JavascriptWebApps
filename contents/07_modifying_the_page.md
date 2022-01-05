# Modifying the page

## Objectives

 * Use JavaScript to dynamically add a new element on the page.

In the previous section, we've seen how we can *refer to* existing elements on
the web page with JavaScript variables. In this section, we'll learn how we can
manipulate these variables and their properties to modify the page content.

## Exercise - adding content

This exercise builds on the previous one, so you can start where you left off.
It will require you to do some research on how to
 * [append a new element on the
   page](https://developer.mozilla.org/en-US/docs/Web/API/Element/append#appending_an_element)
   using `document.createElement` and the `.append()` method.

### Questions

**You should not modify the HTML code directly**. Inside the `View` class:

1. Implement a new method `addParagraph` — this method should *dynamically create a
   new `p` element* and store it in a variable.
2. *Set this new element's content* to the string `'This paragraph has been
   dynamically added by JavaScript!` (or something else).
3. *Append the element* to the main container element.
4. In the main file, call this new method on the existing `View` instance.

When opening the HTML page, you should now see this third paragraph being added
after the two other ones.

![A third paragraph has been added](./resources/dom-append-1.png)

### Separation of concerns

You've noticed that we kept all the code using `document.querySelector` and
other DOM methods (everything that modifies the page content) inside the `View`
class. This is an example of separation of concerns. Like in other tech stacks,
it's important that we keep our code clean and well designed when working with
JavaScript and the web. 

[Next Challenge](08_testing_page_content.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/07_modifying_the_page.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/07_modifying_the_page.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/07_modifying_the_page.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/07_modifying_the_page.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/07_modifying_the_page.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
