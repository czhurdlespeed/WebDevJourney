# Complete Intro to Web Dev v3

Calvin Wetzel

[Complete Intro to Web Dev v3](https://btholt.github.io/complete-intro-to-web-dev-v3/)

## HTML -> Content of Webpage

### Tags

- building blocks and decribes what's inside; opening and closing tag
- most recently opened tag must be the next closed tag

```html

<div>
    <h1>Hi</h1>
</div>

```

- **h** - _Heading_: 6 levels of headings h1, h2, h3, h4, h5, h6

```html
<h1>This is an h1!</h1>
<h2>This is an h2!</h2>
<h3>This is an h3!</h3>
<h4>This is an h4!</h4>
<h5>This is an h5!</h5>
<h6>This is an h6!</h6>
```

- **p** - _Paragraph_: only text goes in p tags; if you want line breaks...just use this

```html
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi est
  sapiente in optio quia inventore quis maxime ullam tenetur?
</p>
<p>
  Maxime quibusdam, dolorum quaerat ducimus inventore sunt pariatur et ea 
  delore
  ipsam. Distinctio eum nobis officiis quam quasi exercitationem eaque?
</p>
```

- **a** - _Anchor_: link to somewhere else; can be internal or external link
  - Use `target="_blank"` to have link open in new tab
  - Use `rel="noopener"` to prevent open link from getting access to website; prevents phishing attacks
  - Use `rel="noreferrer"` to prevent link from knowing your website refers to it; better long term security
  - **Note**: most web browers achieve these `rel` attributes automatically
  - `./` start looking relative to current page; _relative links_

```html
<a href="https://www.frontendmasters.com">Frontend Masters</a>
<a href="https://aka.ms/visual-studio-code">Visual Studio Code</a>
<a href="https://www.codepen.io">CodePen</a>
```

- **div** - _Division_: a generic container tag for grouping together other things; useful with CSS

```html
<div style="width: 100px; height: 100px; background-color: orange;"></div>
```

- **span** - container for small pieces of text; doesn't change styling itself; allows you to use CSS and JS later to make text differnt in some way

```html
<p>This is <span style="text-decoration: underline">important</span> text</p>
```

- **ol, ul, and li** - _ol (ordered list)_ & _ul (unordered list)_ represent lists; _li (list item)_ each item of a list

```html
<ol>
  <li>The First One</li>
  <li>The Second One</li>
  <li>The Third One</li>
</ol>

<ul>
  <li>An Item in the List</li>
  <li>Another Item in the List</li>
  <li>A Yet Different Item in the List</li>
</ul>
```

- **button** - doesn't do much unless used by JS

```html
<button>Click me! I don't do anything</button>
```

- **img** - an _Image_; in html it's apart from the content; in CSS it's for background image/decoration for website; _self closing_ `<img />`; alt text as well
  - Image Formats
    - **JPG** - good for handling large color paletts without increasing file size but they don't allow for transparent pixels (think logos).
      - Great for Photos and Images with lots of gradients
    - **GIF** - go-to option for simple animations but limited in terms of color palette
      - Great for Animations
    - **PNG** - generally larger file size to achieve same quality as _JPG_. However, they deal with opacity really well; no color palette limitations
      - Great for icons, technical diagrams, and logos
    - **SVG** - vetor-based graphics; scale up or down to any dimension without loss of quality
      - Great for responsive design (use on all devices (phones, tablets, displays of different sizes) without have to maintain different websites; just differnt css layouts); use whenever you can

```html
<img
     src="http://pets-images.dev-apis.com/pets/dog25.jpg"
     alt="an adorable puppy"
     />
<img
     src="http://pets-images.dev-apis.com/pets/dog26.jpg"
     alt="an adorable puppy"
     />
<img
     src="http://pets-images.dev-apis.com/pets/dog27.jpg"
     alt="an adorable puppy"
     />
```

- **input**- take input from user; various types: text, color, file, number, datetime-local, radio, checkbox; _self closing_ `<input />`

```html
<!-- these are the same, type="text" is the default -->
<input />
<input type="text" />

<input type="color" />
<input type="file" />
<input type="number" />
<input type="datetime-local" />
<input type="radio" />
<input type="checkbox" />
```

- **textarea** - long form text input like writing sentences; linebreak happens when you hit "return" or "enter"

```html
<textarea></textarea>
```

- **select and option** - selection dropdown with options; developer lists the options for the user to select from
  
```html
<select>
  <option value="seattle">Seattle</option>
  <option value="portland">Portland</option>
  <option value="san-francisco">San Francisco</option>
</select>
```

- **form** - group of html tags; some combination of input tag types; when hooked up to JS, can use them to send info to server

```html
<form>
  <input placeholder="First Name" />
  <input placeholder="Last Name" />
</form>
```

- **table, tr, and td** - used for making tables like in Word in Excel

```html
<table>
  <tbody>
    <tr>
      <td>(0,0)</td>
      <td>(1,0)</td>
    </tr>
    <tr>
      <td>(0,1)</td>
      <td>(1,1)</td>
    </tr>
  </tbody>
</table>
```

- **comments** - `<!-- your comments go here --->`

### Attributes

- **Attributes** allow you to modify behavior of an HTML attritbue such as specifying type of input; key="value" pairs

```html
<!-- The default, if you leave off the type you get the "text" type -->
<input type="text" />

<input type="color" />
<input type="file" />
<input type="number" />
<input type="datetime-local" />
<input type="radio" />
<input type="checkbox" />
```

- **href** and **type** are specific to a few tags
- **class** - can be applied to nearly all tags; classes are more useful than IDs; class is reusable across takes and several can be applied to given tag
- **id** - less useful than tags; they are design to not be reusable; unique to a page; only use if you want to make something unique

### Organizing HTML

- Keep everything together (break it up into "boxes") with a `div`
  - Could also use `<article></article>` tag; no difference with `div`; basically a cardbox with a label; no functional difference
  - Overall, `div` are used to organize html into blocks
- `href` attribute can be absolute link to like google.com or relative to the base URL (another HTML page in folder)
- Add `class` with name to each tag to give context to tag's purpose/what it represents e.g. "social-post", "user-name", "social-post-text", etc.
- Optimize for the "forever" part/maintenance of code; not for ease of initial writing part; will save you time, trouble, and money down the road!
- `nav` - used to help with navigation; think nav bar; contains links to other parts of website; "/" goes up to root/home; "/about" goes up to root/home then down one to about page, "home" down to home from where you are currently at; think of it as moving through directories in terminal

### Head and Meta Tags

- `index.html` - root file of a website
- `<!DOCTYPE html>`` - signal to browser using latest version of html
- `<html lang="en"></html>` - abosulte most root tag of an HTML document; encapsulates everything in document
- `<head></head>` - only stores meta data such as char sets to use, how to handle browser resizings, title that appears in browser tab, what the favicon (little logo) is, where CSS is located, etc.
- `<meta>` - meta tags for various info that goes in `<head></head>`; _self closing_
- `<body></body>` - all visible HTML goes here e.g. divs, spans, tables, h1s, etc.
- Don't memorize this; use **vscode** shortcut `html:5 + Tab` and it will generate this template automatically for you
- Use `lorem(# of words)` to generate latin filler text e.g. `lorem40`

## CSS -> Styling of Webpage

### Rules

- **selector** - everything inside the `{}` is applied to it; it applies to everything that matches the selector
- **property** - `color:`; ~350 of them
- **value** - identifies value of the property; `property:value;` ; each pair ends with a semicolon
- If the selector value is also a parent to another HTML tag, that child will also be effected by the selector

### Selectors and the Cascade

- **classes** - allow us to style the same tags (p, div, span, h, etc.) differently; select the class instead of the tag
  - Therefore, it is important to have useful, identifying class names
  - _Name classes after what they are, not what they look like_
  - Tag selectors are just the tag such as `h1`, `div`, etc.
  - Class selectors are prefixed by a period such as `.branding`, `.blog-post-title`, etc.
  - _Use classes_ ...best way to style web pages.
- `<style></style>` surrounds all css within an html document

```html
<style>
  .branding {
    color: red;
  }

  .blog-post-title {
    color: limegreen;
  }
</style>
<h1 class="branding">My Super Cool Brand</h1>
<h1 class="blog-post-title">My Cool Blog Post</h1>
```

- Conflicts are resolved on a property-by-property basis; if same property applied, the last one referenced in CSS is applied.
- **A class is considered more specific than a tag**...so it wins out if conflict occurs
- **IDs** - are more specific than both classes and tags; `#site-brand`

```html
<style type="text/css">
  #site-brand {
    color: red;
  }

  h1.nav-head.nav-main.other-useful-class {
    /*
     * this class is way too specific; never have a class selector so long
     * it's ridiculous and just to illustrate a point
     */
    color: green;
  }
</style>
<h1 id="site-brand" class="nav-head nav-main other-useful-class">
  The Brand of my Website
</h1>
```

- Levels of Specificity
  - 1) Inline Style
  - 2) `!important`
  - 3) IDs
  - 4) Classes
  - 5) Tags

- Pre-build CSS --> [GetBootstrap](https://getbootstrap.com/)
- Always load your CSS last so that it is referenced last (wins in conflicts)

### Pseudoclasses and Pseudoelements

- Want to do somethings conditionally -> for example, change if mouse hovers over something
- Use `:` after a class and then write the pseudoclasses
- Use to add flavor to website but don't use for core functionality

```html
<style>
  .hover-example {
    width: 100px;
    height: 100px;
    background-color: limegreen;
    color: white;
  }
  .hover-example:select {
    background-color: crimson;
    width: 150px;
    height: 150px;
  }
</style>
<div class="hover-example">Hover your mouse over me</div>
```

- Pseudoelements - `::before` and `::after`
- [Pseudoclasses Exmaple](https://css-tricks.com/pseudo-class-selectors/)

### Layout CSS

- **Box Model**
  - Every tag has a display property
  - `inline` - makes tag behave like text; can't change height, width, padding, margins, etc. Browser makes those decisions and you can't change them
  - `block` - default display for divs and ps; gives control over height, width, padding, margins, etc.
  - several more...
- Include boarder-box in every CSS file; makes pixel dimension math much easier

```css
* {
  box-sizing: border-box;
}
```

### Flex

- `display: flex;` - display mode; allows you to change the layout inside the tag; changes layout of its children; same with `display: float;` except float wraps while flex squishes
- `justify-content` - worries about horizontal justification
- `align_items` - worries about vertical alignment
- `flex` - _makes laying out items so much easier_
- See [More Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for more info on flexbox

### Grid

- Good for laying out pages in grid-like pattern
- Use [Can I Use](https://caniuse.com/ciu/about) - provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers

```html
<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
  }

  .grid-picture {
    margin: 0;
    padding: 0;
  }
</style>

<div class="grid">
  <img
       class="grid-picture"
       src="http://pets-images.dev-apis.com/pets/dog25.jpg"
       alt="a doggy"
       />
  <img
       class="grid-picture"
       src="http://pets-images.dev-apis.com/pets/dog26.jpg"
       alt="a doggy"
       />
  <img
       class="grid-picture"
       src="http://pets-images.dev-apis.com/pets/dog27.jpg"
       alt="a doggy"
       />
  <img
       class="grid-picture"
       src="http://pets-images.dev-apis.com/pets/dog28.jpg"
       alt="a doggy"
       />
</div>
```

- **Another Example**

```html
<style>
  .my-page-header {
    grid-area: nav-header;
    background-color: red;
    padding: 10px;
  }

  .my-page-body {
    grid-area: main-body;
    background-color: blue;
    padding: 10px;
  }

  .my-page-sidebar {
    grid-area: nav-side;
    background-color: green;
    padding: 10px;
  }

  .my-page-footer {
    grid-area: footer;
    background-color: yellow;
    padding: 10px;
    border: 2px solid black;
    border-radius: 10px;
  }

  .my-page {
    display: grid;
    grid-template-areas:
      "nav-header  nav-header  nav-header  nav-side"
      "main-body   main-body   .           nav-side"
      "footer      footer      footer      footer";
  }
</style>
<div class="my-page">
  <header class="my-page-header">the header</header>
  <div class="my-page-body">the body</div>
  <div class="my-page-sidebar">the sidebar</div>
  <footer class="my-page-footer">the footer</footer>
</div>
```

### Animations

- `@keyframes` - allows you to define a reusable animation; for example, `@keyframes spin { ...}`
  - you can then use `spin` as the defined animation for the `animation` property; name doesn't have to be spin; can be any name
  - [More info](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
- Various animation-timing-function are avaiable; you can make your timing custom by using `cubic-bezier()`
  - [More info](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
- Can do animations with color as well

## Javascript

### Javascript Intro

- `<script></script>` tags allows JavaScript code to load into an HTML page; goes in `<body></body>`
- Use `console.log(variable)` to print the contents of `variable` to the console

### Numbers, Strings, and Booleans

- Use template strings for string concatenation/insertion
- Backticks are used to make template strings; see example below; also allows you to write multiple lines

```javascript
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;
```

- Javascript _does not_ separate integers, floats, etc. Only one type: **Number**

### Control Flow

- typical if else statements
- Use `=` for assignment
- Use `==` (double equals) to test if same _thing_ but **doesn't** have to be same _type_
  - 2 + 2 == "4"
  - False == 0
- Use `===` (three equal signs) to test equality; tests if same _thing_ **and** same _type_
  - 2 + 2 === 4
  - "Hello world 🌎" === "Hello world 🌎"
- Use `!==` (one exclamation and two equal signs) to test inequality

### Loops

- `Javascript` is single threaded
- `const` variables cannot be reassigned later
- `let` variables can be reassigned/changed

### Functions

- Various ways of writing functions

```javascript
function bark() {
  console.log("woof");
}

const meow = function () {
  console.log("meeeeeeeow");
};

// the => is just = > put together, the font just combines them to one glyph
const chirp = () => {
  console.log("chirp chirp");
};

bark();
meow();
chirp();
```

### Builtins

- Look at [MDN](https://developer.mozilla.org/en-US/) for list of **builtins**

### Objects

- Used for collection of methods and variabels that relate to an instance of a class/type

```javascript
const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
};
```

- Nest objects within other objects
  
```javascript
const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    city: "Seattle",
    state: "WA",
    country: "USA",
  },
};

console.log(me.name.first);
console.log(me.location.state);
```

### Context

- `this` - references the object based on the scope you are in when you call it
  - When placed inside an object/class, it is refering to the object that calls the method so that it can then use the object's internals
  - Matters how you call it

```javascript
const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA",
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  },
};

console.log(me.getAddress());
```

### Arrays

- Declared with variable and square brackets `[]`
  - use `[]` to access element of array
- Use `.length` to get length of array
- Use `.push(...)` to append to an array
- How to `console.log()` elements of an array?

```javascript
const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];

// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// method 2
cities.forEach(function (city) {
  console.log(city);
});
```

- `forEach` method takes a function and applies it to each element in the array

## Putting It All Together

### The DOM

- Document Object Model: the way for Javascript to interact and change parts of HTML/CSS.

### Events and Listeners

- Events: actions the user takes such as clicking a button or typing something
- Event Listeners: our reponse to these events; passed a Javascript function

```javascript
const button = document.querySelector(".event-button");
button.addEventListener("click", function () {
  alert("Hey there!");
});
```

## Talking to Servers

### JSON

- AJAX: asynchronous JavaaScript and XML
- JSON: JavaScript Object Notation
  - 99% of the time, JSON is valid JavaScript...not all JavaScript is valid JSON
- **JSON Parse**

```javascript
"{\"name\": \"Luna\",\"age\": 10,\"breed\": \"Havanese\",\"location\": {\"city\":\"Seattle\",\"state\": \"WA\"}}"
"Luna"
"Seattle"
Object {
  "age": 10,
  "breed": "Havanese",
  "location": Object {
    "city": "Seattle",
    "state": "WA",
  },
  "name": "Luna",
}
undefined
```

- **JSON Stringify**

```javascript
const dog = {
  name: "Luna",
  age: 10,
  breed: "Havanese",
  location: {
    city: "Seattle",
    state: "WA",
  },
};

const objString = JSON.stringify(dog);
console.log(objString);
```

### AJAX

- API: application programming interface; a URL that you can make requests to and get information back; a website for machines
  - API query sends the variables for the response you are searching for
    - `?zip=98109` or `example.com/weather?zip=98109&day=tomorrow`
  - `fetch`: builtin function that allows you to give it a URL and then fetches the information from it via an API request; _can do the JSON parsing for you with `json()` function_
  - `promise`: represents a future value; give it to a function with its then function to run whenever it gets its answer back

### Async/Await

- **!!!!`await` keyword can only be used inside of `async` functions!!!!**

```javascript
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target3");

async function addNewDoggo() {
  const promise = await fetch(DOG_URL);
  const processedResponse = await promise.json();
  const img = document.createElement("img");
  img.src = processedResponse.message;
  img.alt = "Cute doggo";
  doggos.appendChild(img);
}

document.getElementById("dog-btn3").addEventListener("click", addNewDoggo);
```

- `async` functions _always_ return promises themselves

```javascript
async function getName() {
  return "Brian";
}

console.log("a promise", getName());

getName().then(function (name) {
  console.log("the actual name", name);
});
```

### Project

- Use [Insomnia](https://docs.insomnia.rest/) to test GET/POST requests as a client
- `fetch` has a `method` keyword that can be changed to post to make post requests
- `200` status code means everything is good
- `404` status code means the page is not found
- `500` status code means the server is broken

## Other Stuff You Should Know

### Using Third Party Libraries

- Use `npm` to install third party libraries
- `import { x } from "y";` to import a function from a library
- npm is a package manager for JavaScript
- `npm install` installs all the dependencies in the `package.json` file
- `npm install --save-dev` installs the dependencies as development dependencies
- `npm run build` runs the build script in the `package.json` file
- `npm run start` runs the start script in the `package.json` file
