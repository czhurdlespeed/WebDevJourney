#### Course Overview
### 3 Pillars
1. Types
2. Scope
3. Objects (Oriented)


## Types

- Primitive Types
    - undefined
    - string
    - number
    - boolean
    - symbol
    - bigint
- Object Types
    - object
    - function
    - array
- `undefined` is a default value for declared variables; does not currently have a value
- `typeof` always returns a string
- `undefined` vs `undeclared`
    - `undeclared` the varible has never been created in any scope
    - `undefined` the variable does not currently have a value yet
- `NaN` is the only value not equal to itself
    - type is  `number`
    - only use `NaN` to show invalid number; don't use `undefined`, `null`, `0`, or `-1`
- Coercion: type conversion
    - `==` is a loose equality operator
    - `===` is a strict equality operator
    - `==` will convert types to compare
    - `===` will not convert types to compare
    - `>`, `<`, `>=`, `<=` will convert types to compare
    - If one type is a number, the other type will be converted to a number; always tries to coerce to a number first
        - use this to your advantage for type conversion so you don't have to explicitly do it...improves code readability
    - If both types are strings, they will be compared lexicographically
    - `==` does `===` when the types match; allows coercion when types do not match
    - `===` first checks if the types match and if they don't, it returns false
    - Decision behind `==` and `===`: Do I want to allow a coercive comparison or not?
    - `null` and `undefined` are equal in `==` but not in `===`
    - `==` tries to coerce objects into primitives; to value or to string 
        - array stringification drops all levels of brackets and converts to a string
    - Never use `==` if you don't know the types
        - about comparisons with known types; optionally where conversions are helpful
    - If you don't know the types, you don't fully understand you code. _Refactor_ so that you know your types.
    - `===` is a signal to the reader that you don't know the types being compared. Relying on `===` to detect types...code smell.
- TypeScript, Flow, and type-aware linting
    - TypeScript
        - Benefits
            - Catch type-related mistakes
            - Communicate type intent
            - Provide IDE feedback (tooling ecosystem)
        - Cons
            - Inferencing is best-guess, not a guarantee
            - Annotations are optional
            - Any part of the application that isn't typed introdcues uncertainty 
            - Requires a build process
- Scope
    - Nested Scope
    - Hoisting
    - Closure
    - Modules
    - JS first parses code, creates scopes, then executes code
        - scopes organized via functions and blocks
    - Functions
        - Function declaration starts with `function` keyword i.e. no assigment to a variable; hoisted to the top of the scope
        - Function expressions are assigned to a variable; only the variable is hoisted not the function
            - Named function expressions are useful for debugging
            - Try to avoid anonymous functions; harder with stack traces
            - Prefer function declarations over function expressions
        - If greater than 3 lines, use a function declaration
        - If function will be called many times, use a function declaration
        - If less than 3 lines and only called once, use a function expression
        - Arrow functions
            - Anonymous functions
            - Try to avoid anonymous functions, therefore avoid arrow functions
            - Hurts readability: have to infer purpose from body (both sides of arrow) whereas function declaration names explicitly state purpose if named appropriately
        - __Named Function Declaration > Named Function Expression > Anonymous Function Expression__
        - Want to communicate as effectively as possible; want someone to be able to read the code at a glance and understand it
    - Lexical Scope - decided at compilation time; fixed at authorship; doesn't change at runtime
        - Its predictability makes it easier to optimize
    - Dynamic Scope - runtime conditions change the scope
        - A function's reference to its arguments depends on where it was called from at runtime
    - Functions help you control/manage your scopes
        - Principle of Least Priviledge - you should default to keeping as much private and only what is necessary public. Helps avoid accidential collision and unexpected changes to your variables/code; _defensive posture_
            1) Resolves naming collision problems
            2) Someone else can't accidently/intentionally misuse/access it
            3) Protect yourself to future refactoring issues i.e. a refactor won't break someone else's code that relies on your code.
    - Immediately Invoke Function Expression - only need it for a moment for its scope as an expression to that typically sets a variable
        - Ex) Named or Anonymous 
        ```javascript
            (function anotherTeacher() {
                var teacher = "Suzy";
                console.log(teacher); // Suzy
            })();
        ```
    - Block scope with `let` to create brief scope; `let` belongs to block scoped variables
        - `let` is for localized usage; usually within a couple lines of code
        - If you want a variable to only last for a couple lines, open some curly braces and use `let`
            - Use `let` and curly braces to control the scope of your variables
    - `const` a variable that can't be reassigned; therefore, array/object internals can change but the array/object that the variable points to can't. __Try to only use with primitives__
    - Hoisting - when JS engine enters a scope, it looks ahead at the variables and 'moves' their declaration to the top of the scope; does this via parsing; all function declarations are hoisted therefore you can put them at the bottom and the executable code/calls at the top to improve readability
        - `let` and `const` hoist but are not intialized, whereas `var` is initialized to `undefined` when hoisted
    - Arrow functions don't define a `this` keyword; it jumps up to the next level's scope
    - Object properties aren't scoped; they are just properties of the object and have the same scope as the object
- `class{}`
    - `constructor` is a method that is called when a new instance of a class is created
    - Classes can be extended with `extends` keyword; form of inheritance
    - `super` keyword is used to call the parent class's constructor and access the parent class's properties/methods
        - methods exist on the prototype of the class not the instance
- Prototypes
    - A constructor call makes an object linked to its own prototype
    - The prototype chain allows instances to share methods, while this binding lets each instance execute those shared methods with its own context.
    - The `this` keyword's context is determined by the call site
    - Delegation allows one to link objects together so you can share methods with the context based on the call site (i.e. `this`); i.e. ensures each method executes in the context of the calling object, not where the method is defined



