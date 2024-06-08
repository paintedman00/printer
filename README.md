# Tree Function

A versatile JavaScript function that recursively processes various data types, including strings, numbers, booleans, arrays, and objects. The function prints the values to the console.

## Overview

The `tree` function is designed to handle different types of input and recursively process arrays and objects. It prints each element or property value to the console.

## Usage

1. **Download the Script:**

    Save the script to a file, e.g., `tree.js`.

### Example Usage

#### Processing a String

```javascript
tree('Hello, World!');
// Output: Hello, World!
```

#### Processing a Number

```javascript
tree(123);
// Output: 123
```

#### Processing a Boolean

```javascript
tree(true);
// Output: true
```

#### Processing an Array

```javascript
tree([1, 'two', true, [3, 4]]);
// Output: 
// 1
// two
// true
// 3
// 4
```

#### Processing an Object

```javascript
tree({ a: 1, b: 'two', c: true, d: { e: 3, f: 4 } });
// Output: 
// 1
// two
// true
// 3
// 4
```

## Function Details

### Function `tree`

This function processes various data types and recursively handles arrays and objects.

- **Parameters:**
  - `input`: The input value to process, which can be of type `string`, `number`, `boolean`, `array`, or `object`.

- **Example:**

    ```javascript
    tree([1, 'two', true, [3, 4]]);
    ```

### Script Steps

1. **Check Type of Input:**

    The function checks the type of the input using the `typeof` operator and processes it accordingly.

    ```javascript
    switch (typeof input) {
      case 'string':
      case 'number':
      case 'boolean':
        console.log(input);
        break;
      ...
    ```

2. **Handle Arrays and Objects:**

    If the input is an object, the function checks if it is an array. It then recursively processes each element or property value.

    ```javascript
    case 'object':
      if (Array.isArray(input)) {
        input.forEach(element => tree(element));
      } else {
        for (let key in input) {
          if (input.hasOwnProperty(key)) {
            tree(input[key]);
          }
        }
      }
      break;
    ```

3. **Handle Unsupported Types:**

    The function includes a default case to handle unsupported input types.

    ```javascript
    default:
      console.log('Unsupported type');
    ```
