# CSS Foundations

Calvin Wetzel

## How CSS Is Rendered

1. Browser loads HTML
2. Converts HTML to DOM
3. Fetches linked resources
4. Browser parses CSS
5. Render tree is laid out
6. UI is painted

## Block and Inline

- __Block Elements__ generate an element box that fills its parent element's content area and cannot have other elements beside it.
- __Inline Elements__ generate an element box within a line of text and do not break up the flow of that line.

## Selectors

- __Selectors__ select the HTML element or elements you want to apply some styles to.

- Type selector example:
  
```css
h1 {
  color: red;
}
```

- Class selector example:

```css
.myClass {
  color: blue;
}
```

- ID selector example:

```css
#myID {
  color: green;
}
```

- Universal selector example (selects all elements):

```css
* {
  color: purple;
}
```

## Specificity

- __Inheritance__ occurs when an inheritable CSS propterty (e.g. color) is not set directly on an element, the parent chain is traversed uint a value for that property is found.
- __Specificity__ is the algorithm used by browsers to determine which CSS declaration should be applied. Each selector has a calculated weight. The most specific weight wins.

- _Inline styles_ have the highest specificity.

- `!important` declarations override all other declarations.

## Color

- Name Color, Hexadecimal, RGB, RGBA, HSL

## Font Families

- Specifies a list of one or more font families and/or generic family names.

## Px vs Em vs Rem

- __Px__ is a fixed unit of measurement.
- __Em__ is a relative unit of measurement.
- __Rem__ is a relative unit of measurement that is relative to the root element. <- _Recommended_

## Text Decoration Shorthand

```css
p {
    text-decoration: underline red dashed 4px;
}
```

## Moving to Project Setup
