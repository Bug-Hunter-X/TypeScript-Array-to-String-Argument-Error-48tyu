# TypeScript Array to String Argument Error
This example demonstrates a common TypeScript error: passing an array of strings to a function expecting a single string.

## Bug
The `greeter` function expects a single string as input.  However, the `user` variable is an array of strings.  Attempting to pass `user` to `greeter` results in a type error.

## Solution
The solution depends on how you want to handle the array of strings.  One approach is to iterate through the array and call `greeter` for each element. Another is to join the array elements into a single string before passing it to the function. The solution below demonstrates the latter approach.