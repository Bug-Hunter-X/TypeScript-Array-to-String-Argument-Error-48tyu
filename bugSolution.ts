function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Alice", "Bob", "Charlie"];
let userString = user.join(", "); // Join array elements into a single string
console.log(greeter(userString)); // Output: Hello, Alice, Bob, Charlie

//Alternative solution: iterating through the array
user.forEach(person => console.log(greeter(person))); //Output: Hello, Alice, Hello, Bob, Hello, Charlie