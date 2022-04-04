# Setting up a minimal frontend web application

Follow these instructions when setting up a new frontend web project. Your project will use the following tools and libraries:
 * NPM to install dependencies.
 * `jest` to write and run tests.
 * `esbuild` to bundle JS source files.

### 1. Initialise the project directory

This assumes you have `NVM` already installed:

```bash
nvm use node
npm install -g jest esbuild

mkdir my-project-directory
cd my-project-directory/

npm init -y
```

### 2. Create files

```bash
touch index.js
touch index.html
```

### 3. Add the HTML scaffold on the page

You can find a lot of HTML "boilerplate" templates online — here's one you can use in your `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>My web page</title>
  </head>
  <body>

  </body>
</html>
```

### 4. Add the `build` script to `package.json`

This is so we can run `npm run build` in our terminal to execute `esbuild` to bundle the code.

```json
{
  "name": "my-project-directory",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    // add this line:
    "build": "esbuild index.js --bundle  --outfile=bundle.js --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

You can now run `npm run build` and it should generate the file `bundle.js` — leave the command running in a terminal somewhere, otherwise new changes made to your source files won't be watched.

### 5. Load the `bundle.js` file on the page

```html
  <!-- add this line at the end of the body -->
  <script type="text/javascript" src="bundle.js"></script>
```

### 6. Add files to `.gitignore` and commit your changes

```bash
echo "node_modules" >> .gitignore
echo "bundle.js" >> .gitignore

git init .
git add .
git commit -m "Project setup"
```

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=pills/setup_minimal_frontend_webapp.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=pills/setup_minimal_frontend_webapp.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=pills/setup_minimal_frontend_webapp.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=pills/setup_minimal_frontend_webapp.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=pills/setup_minimal_frontend_webapp.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
