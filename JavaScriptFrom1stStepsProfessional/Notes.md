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
