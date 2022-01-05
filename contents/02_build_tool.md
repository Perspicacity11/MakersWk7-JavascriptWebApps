# Bundling using a build tool

## Objectives

 * Use esbuild to bundle a JavaScript file.

JavaScript programs are usually composed of many different files. As we add more
files (functions, classes, etc) to our application, the number of files to load
on the page is becoming harder to manage.

To avoid this, we can use what is called a *build tool*. Most modern JavaScript
codebases will use some kind of build tool as part of their tooling.

We'll use [`esbuild`](https://esbuild.github.io/getting-started/) as it is
simple enough for us to get started without doing too much configuration.
**You'll need to install it globally using `npm`:**

```bash
$ npm install -g esbuild
```

## Exercise

**Using the same project directory** than in the previous section, we'll use
`esbuild` to "bundle" our main source file `index.js` into a new file
`bundle.js` — we'll also refer to this file as the **bundle file** (nothing to
do with Ruby's `bundle` though!).

### Questions

1. In a new terminal (and in the exercise directory), run the command `npm run
   build`. **Keep this process running in the background.**

You should get the following output:
```bash
> esbuild index.js --bundle  --outfile=bundle.js --watch

[watch] build finished, watching for changes...
```
2. Observe the contents of the exercise directory — there should be a new file
   called `bundle.js`.
3. Update the `<script>` tag inside the HTML page to point to this new file,
   instead of `index.js`.
4. Reload the HTML page in your browser and verify in the console **that you can
   see the same output as before.**

### Troubleshooting common problems

If this last step doesn't work, it's likely because:
* the command `npm run build` didn't work as expected — make sure you installed
  `esbuild` globally with `npm install -g esbuild`, and that you run `npm
  install` in the project directory.
* the `<script>` tag is incorrect, or doesn't point to the right file.

In the next section, we'll look at how we can bundle different JS files (or
**modules**) into a single bundle file.



[Next Challenge](03_build_tool_2.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/02_build_tool.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/02_build_tool.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/02_build_tool.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/02_build_tool.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/02_build_tool.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
