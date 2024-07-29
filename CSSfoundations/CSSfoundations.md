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

- **Block Elements** generate an element box that fills its parent element's content area and cannot have other elements beside it.
- **Inline Elements** generate an element box within a line of text and do not break up the flow of that line.

## Selectors

- **Selectors** select the HTML element or elements you want to apply some styles to.

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

- **Inheritance** occurs when an inheritable CSS propterty (e.g. color) is not set directly on an element, the parent chain is traversed uint a value for that property is found.
- **Specificity** is the algorithm used by browsers to determine which CSS declaration should be applied. Each selector has a calculated weight. The most specific weight wins.

- _Inline styles_ have the highest specificity.

- `!important` declarations override all other declarations.

## Color

- Name Color, Hexadecimal, RGB, RGBA, HSL

## Font Families

- Specifies a list of one or more font families and/or generic family names.

## Px vs Em vs Rem

- **Px** is a fixed unit of measurement.
- **Em** is a relative unit of measurement.
- **Rem** is a relative unit of measurement that is relative to the root element. <- _Recommended_

## Text Decoration Shorthand

```css
p {
  text-decoration: underline red dashed 4px;
}
```

## Moving to Project Setup

...

## CSS Flexbox

- Flexbox is a layout model that distributes space among items in a 1D container

## CSS Grid

- Grid is a layout model that distributes space among items in a 2D container

## Combinators

- Combine selectors in a way that gives them a relationship
- Descendent Selector example

```css
ul li a {
  color: red;
}
```

- Child Selector example (select children (li) of a parent (ul))

```css
ul > li {
  color: blue;
}
```

- Adjacent Sibling Selector example (select paragraph if immediately after an h1)

```css
h1 + p {
  color: green;
}
```

- General Sibling Selector example (share the same parent)

```css
h1 ~ p {
  color: purple;
}
```

## Block Element Modifiers (BEM)

- Naming convention for classes in HTML and CSS
- Block: standalone entity that is meaningful on its own
  - e.g. `header`, `container`, `menu`, `checkbox`, `input`
- Element: part of a block that has no standalone meaning
  - e.g. `menu item`, `list item`, `checkbox caption`, `header title`
- Modifier: used to changed appearance or behavior of a block or element
  - e.g. `disabled`, `highlighted`, `checked`, `fixed`, `size big`
- `.block__element--modifier`

## Moving Back to Project

...

## Boarder Box

- Like Standard Box Model, but padding and border are included in the width and height (entire size is exactly what you specified)

## Z-Index

- Stacking context of an element in the z-axis
- Way to layer elements

## Position

- static, relative, absolute, fixed, sticky
- static: doesn't move with top, right, bottom, left
- relative: moves with top, right, bottom, left
- fixed: stays in place even when scrolling
- absolute: relative to the nearest positioned ancestor
- sicky: acts like fixed until it reaches end of it's container then it becomes relative

## Background

- background-color, background-image, background-size, background-repeat, background-position
