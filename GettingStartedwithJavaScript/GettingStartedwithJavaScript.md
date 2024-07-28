# Getting Started with JavaScript, v2

Calvin Wetzel

## Introduction

Three Pillars of JS:

1. Types/Coercion
2. Scope/Closures
3. this/Prototypes

## Values

- In Javascript, no distinction between integer and floating point numbers; treated the same.
- `true` and `false` are boolean values; both are lowercase.
- `[]` is an array, `{}` is an object.

## Operations

- `==` is for equality, `===` is for strict equality (type as well)
- `||` is the OR operator, `&&` is the AND operator.
- `!` is the NOT operator.

## Types

- `typeof` is a unary operator that returns a string of the type of the operand.

## Variables

- `++` and `--` are increment and decrement operators (by 1).
- `+=` and `-=` are addition and subtraction assignment operators (by a specified amount that is greater than 1).

## Expressions and Statements

- An expression is a reference to a value.
- A statement is a unit of code that can be executed and assigned a value.

## Decisions

- `if`, `else if`, and `else` are conditional statements.

```javascript
var age = 39;
if (age >= 18) {
    goVote();
} else if (age >= 21) {
    goDrink();
} else {
    goCandy();
}
```

## Loops

- `for`, `while`, and `do..while` are loop statements.

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}

var students = [/*...*/];
for (let student of students) {
    console.log(student);
}
```

`.pop()` removes the last element of an array and returns it.
`.shift()` removes the first element of an array and returns it.
`.push()` adds an element to the end of an array.
`.unshift()` adds an element to the beginning of an array.

## Functions

```javascript
   `Hello, ${student.name}` 
```

is an interpolated string.

## Three Pillars of JS

1. Types/Coercion
   1. Primitive Types - undefined, string, number, boolean, object, symbol, _null_
        - variables don't have types, values do.
        - NaN results from invalid numeric operations.
        - **new** to create objects.
        - Coercion example: string concatenation; `+` coerces numbers to strings.
        - Falsy: "", 0, -0, NaN, false, null, undefined.
        - Truthy: everything else.
        - `!!` is a coercion to boolean.
   2. Converting Types
        - Coercion example: string concatenation; `+` coerces numbers to strings.
        - Falsy: "", 0, -0, NaN, false, null, undefined.
        - Truthy: everything else.
        - `!!` is a coercion to boolean.
   3. Checking Equality
        - `==` allows coercion (types different); typically better if you know the types.
        - `===` disallows coercion (types same); so need to check for both _null_ and _undefined_.
2. Scope/Closures
   1. Scope: where to look for things
        - Inner scope can access outer scope, but not vice versa.
        - Undefined - variable declared but not assigned.
        - Undeclared - variable not declared anywhere.
        - Anonymous and Named Functions
        - Immediately Invoked Function Expressions (IIFE)
        - Block Scoping - _let_ create variable within curly braces.Can have save name as variable in outer scope but is treated as a different variable. (Only exists in the inner/block scope.)
   2. Clousre: when a function remmembers the variables outside of it, even if you past that function elsewhere.
  
3. this/Prototypes
   1. this: references the execution context for that call; determined entirely by how the function was called
   2. Prototypes: how to share methods and properties between objects.
   3. `class` does same thing as prototype style
