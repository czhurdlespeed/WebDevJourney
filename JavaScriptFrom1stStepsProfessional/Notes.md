# [JavaScript: From 1st Steps to Professional](https://anjana.dev/javascript-first-steps/)

## Where to write JavaScript code?

- **Browser Console**
- **IDE**
- **Online Plaground/Editor**

## The DOM (Document Object Model)

- **DOM** is a programming interface for web documents. It represents the structure of a document as a tree of nodes.

## Exploring DOM Structure with JavaScript Console

- `document.getElementById('id')`
- returns the element with the specified ID.

- `document.getElementsByTagName('tag')`
- returns a collection of all elements in the document with the specified tag name.

- `document.getElementsByTagNames('tag').length`
- returns the number of elements in the collection.

- `document.getElementsByID('id').textContent`
- returns the text content of the element.

- `typeof item`
- returns the type of the item.

## String Manipulation

- **String** is a sequence of characters.
- `.indexOF('substring')`
- returns the position of the first occurrence of a specified substring within a string.

- `.includes('substring')`
- determines whether a string contains the specified substring; returns `true` or `false`.

- `.startsWith('substring')`
- determines whether a string begins with the specified substring; returns `true` or `false`.

- `.toUpperCase()` or `.toLowerCase()`
- converts a string to uppercase or lowercase.

- [String MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Operators

- **Arithmetic Operators**
  - `+` Addition
  - `-` Subtraction
  - `*` Multiplication
  - `/` Division
  - `%` Modulus
  - `++` Increment
  - `--` Decrement
  - `**` Exponentiation
- **Assignment Operators**
  - `=` Assign
  - `+=` Add and assign
  - `-=` Subtract and assign
  - `*=` Multiply and assign
  - `/=` Divide and assign
  - `%=` Modulus and assign
  - `**=` Exponentiation and assign
  - `<<=` Left shift and assign
  - `>>=` Right shift and assign
  - `>>>=` Unsigned right shift and assign
  - `&=` Bitwise AND and assign
  - `^=` Bitwise XOR and assign
  - `|=` Bitwise OR and assign
  - `&&=` Logical AND and assign
  - `||=` Logical OR and assign
  - `??` Nullish coalescing operator; ternary operator
- **Comparison Operators**
  - `==` Equal to
  - `===` Equal value and equal type
  - `!=` Not equal
  - `!==` Not equal value or not equal type
  - `>` Greater than
  - `<` Less than
  - `>=` Greater than or equal to
  - `<=` Less than or equal to
  - `?` Optional chaining operator; access deep properties (attributes or methods) without worrying about whether the property exists or not

## Variables

- **Variables** are containers for storing data values.
- `let` allows you to declare a variable with block scope.
- `const` allows you to declare a variable with block scope, but the value of the variable cannot be changed.
- `var` allows you to declare a variable with global scope.

## Arrays

- **Arrays** are a special type of objects used to store multiple values in a single variable.
- `myarray = [value1, value2, value3, ...]`
- `myarray.includes(value1)`
- `.push(value)` & `.pop()` removes from the end of the array
- `.shift()` & `.unshift(value)` removes from the beginning of the array
- Beware of sorting arrays with numbers; use a compare function.
- Arrays are mutable
- Strings are immutable
- `const` creates a constant reference to an array, not a constant array (values of the array can be changed but the variable cannot be reassigned)
- Variables are references to objects in memory (not copies of the objects); think pointers in C++
- `const` does not allow you to change what the variable points to, but it does allow you to change the object itself
- `let` allows you to change what the variable points to

## Objects

- **Objects** are a special type of data type that can store multiple collections of data.
  - (JSON) JavaScript Object Notation
- `const myobject = {key1: value1, key2: value2, ...}`
- Mutable
- Arrays are objects
- Object methods are functions stored as object properties
- `this` refers to the object that the method is a property of
- Builtin objects such as `document`, `Math`, and `console` are objects
- Strings are primitive values (not objects) but they are wrapped in objects when you call methods/properties on them

## Functions

- **Functions** are reusable blocks of code that perform a specific task.
- `function myfunction() { ... }`
  - parameters must follow variable naming rules
  - will not catch errors if you pass the wrong number of arguments
- _Arrow Functions_
  - allows us to create an unnamed/anonymous function without much code
  - `const myfunction = (parameter1, parameter2) => ...` for implicit return; must be on one line
  - `const myfunction = (parameter1, parameter2) => { ... }` for multiple lines with explicit return

## Scopes

- Inner scope has access to outer scope but **not** vice versa
- Global `let` variables can be changed from within a function
- `const` reference cannot be changed but the object itself can be changed
  - Ex) `const myobject = {key1: value1, key2: value2}; myobject.key1 = value3;` but myobject cannot be reassigned to a new object

## [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

- **Event Listeners** are functions that listen for a specific event/action to occur.
  - web browser fires events when certain things happen on a page
  - we can detect these events using event listeners
  - `.addEventListener(<event_type>, <function/handler>)` - listen for events on a dome element
    - parameters: event type, function to run when event occurs
    - `event` object is passed to function containing info about the event
    - you can have multiple listeners for the same element and event type
    - you can capture various attributes of the event object e.g. target, location in viewport, etc.

## Conditionals

- Ternary Operator `condition ? expression1 : expression2`
- Ex) `let mood = forcast === 'rain' ? 'sad' : 'happy';`

## Loops

- `for (let i = 0; i < array.length; i++) { ... }`
  - allows for code repitition across various elements without having to explicitly write out each element; leverage
- `for (let item of array) { ... }`
- `for (let char of "ALOHA") { ... }`
  - strings and arrays are iterables

## map & filter

- process elements of an array
- `map` - creates a new array with the results of calling a provided function on every element in the array; (want to modify each element)
- `filter` - creates a new array with all elements that pass the test implemented by the provided function (filter function); (want to select elements that meet a certain condition)
- backticks are like python f-strings; allow you to insert variables into strings

## Spread

- expands an array into individual elements; think of python tuple unpacking
- `const newarray = [...array1, ...array2]`
- Equivalent to `newarray = array1.concat(array2)`
- `.push` mutates the original array; `concat` does not (returns copy)

## setTimeout

- JS can only do one task at a time (single-threaded)
- `setTimeout(function, milliseconds)` - executes a function, once, after waiting a specified number of milliseconds; function runs at different time than where it is located in the code
  - moves to other code while time is counting down
  - when time is up, function is added to the call stack

## [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

- JS Runtime (Stack and Heap)
  - **Heap** - memory allocation
  - **Stack** - exectucution context
    - _one thread == one call stack == one thing at a time_
  - Errors in console print out the call stack
  - Calls on the stack that take a while (while loops, api calls) are considered blocking
- Asynchronous callbacks prevent blocking functions from blocking the call stack
- Concurrency and Event Loops
  - Pieces of browser outside of JS runtime (DOM, AJAX, Timers)
  - **Web APIs** push callbacks to the **task/callback queue**
    - If stack is empty, **event loop** pushes callback to the stack
    - You can set the time to zero if you want to defer a function until the stack is empty/clear
- Renders can't occur while stack has items
  - Place slow functions asynchonously in the task queue
  - Permits renders/UI updates to occur while stack is empty (between pushes from the task queue to the stack)
- **BLUF:** JS is single-threaded so you don't want to block the main thread with slow functions; asynchronous offloads slow functions to the task queue to place them in the stack when it is empty (otherwise, page becomes unresponsive because of slow functions (blocks renders))
- **Callbacks** are functions that are passed as argumetns to another function to be called at a later time. The callback will be called at the appropriate time within the containing function.

## APIs & fetch

- **APIs** provide URLs that point at data we care about
  - `fetch(url)` - lets us use JS to load data from a URL
    - returns a promise
    - `.then(response => response.json())` - converts response to JSON
    - `.then(data => console.log(data))` - logs the data to the console
- **Promises** are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value; promise object contains a state (pending, fulfilled, or rejected) and a value
  - `.then()` - returns a promise
  - `.catch()` - returns a promise
  - `.finally()` - returns a promise
- **Async/Await** - allows you to write asynchronous code that looks synchronous
  - `await` forces JS to stop and wait for promise to be _fulfilled_ before moving on; other wise all you have is a pending promise with no data; pretend it is synchronous
  - `async function myfunction() { ... }`
  - `const data = await fetch(url);`
  - `const json = await data.json();`
  - `console.log(json);`

## Destructuring

- **Destructuring** allows you to extract multiple properties from an object or multiple elements from an array and store them in variables (responses, document, etc.)
  - `const {key1, key2} = myobject;`
  - `const [element1, element2] = myarray;`
  - `const {key1: newkey1, key2: newkey2} = myobject;`
  - `const {key1 = 'default', key2 = 'default'} = myobject;`
  - `const [element1, ...rest] = myarray;`
  - `const [,,element3] = myarray;`
