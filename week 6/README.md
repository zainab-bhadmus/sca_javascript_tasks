# JS Closures exercises (MVP)

1. In your own terms, define what a Closure is in Javascript

2. What is result?

```
var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
```

3. What will you see in the console for the following example? Explain Why

```
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
```
