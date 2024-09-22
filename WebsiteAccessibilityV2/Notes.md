# Website Accessibility v2

## What is accessibility?

- Accessibility is the practice of making your websites usable by as many people as possible. We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile devices, or those with slow network connections.

## Alternative Text

- Add alternative text to images so screen readers can read them out loud to visually impaired users.
- SEO makes use of alt text to understand what the image is about.
- Can also make hidden divs that contain discriptive text
  - Stays hidden from visible users but is read by screen readers

## Semantic HTML

- Use semantic HTML elements/tags to give meaning to the content.
- Use to proper tag for the context; aids screen readers in understanding the content.
- Use `label` tags for form inputs instead of something like a `div` or `p` tag.
- `aria-label` attribute can be used to give a label to an element that doesn't have a label inherently.
- ARIA roles can be used to give meaning to elements that don't inherently have meaning such as buttons
- Use `tabindex` attribute to give elements focus and allow them to be tabbed to.
- Use `onkeyup` event listener to allow for keyboard navigation of elements.

## [Aria](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

- [ARIA Roles, states, and properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

## Focus Management

- React and Angular have accessibility plugins that can help flag accessibility issues.
- You can also use services for accessibility testing/auditing.
- Tab navigation (tab move forwards and shift + tab to move backwards)
  - `tabindex = "<number>"` attribute can be used to give elements focus and allow them to be tabbed to.
- `document.activeElement` can be used to get the currently focused element.
  - Example: Using active element from previous page to return user to that element when they return to the page.
- Tab trapping can be using to keep focus within a modal or other element; creates a tab loop.

## Color Contrast

- [WebAIM](https://webaim.org/resources/contrastchecker/) has a color contrast checker that can be used to check the contrast of text and background colors.
