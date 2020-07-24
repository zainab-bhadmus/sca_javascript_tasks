# Syncronous & Asyncronous Javascript (MVP)

1. What are promises and how they are useful?
Promises 

2. What is the difference between synchronous and asynchronous code in JavaScript?
A synchronus code ensures that each step of an operation waits for the previous step to execute completely while asynchronous code ensures that any process that takes time to process is usually run along other synchronous operations.
3. Write out any sample syncronous and asyncronous javascript code

Synchronous sample code
console.log("Bathe baby");
console.log("Clothe baby")
console.log("Feed baby")
You'll see the following when you log into the console:
Bathe baby
Clothe baby
Feed baby

Asynchronous sample code 
console.log("Bathe baby");

setTimeout(function() {
  console.log("Clothe baby")
},1000);

console.log("Feed baby");
When you log this into the console, you'll see:


4. List the different ways to deal with Asynchronous Code?
Callbacks
Promises
Async or Await