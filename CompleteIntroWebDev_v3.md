# Complete Intro to Web Dev v3

Calvin Wetzel

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

- **a** - _Anchor_: link to somewhere else

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
