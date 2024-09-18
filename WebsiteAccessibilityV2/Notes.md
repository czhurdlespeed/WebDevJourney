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
