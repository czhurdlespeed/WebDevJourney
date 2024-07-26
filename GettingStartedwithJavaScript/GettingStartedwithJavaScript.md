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
