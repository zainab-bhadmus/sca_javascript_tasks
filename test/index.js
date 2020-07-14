let a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  };

  a = 5;

  return otherFunction;
};

var firstResult = someFunction(9);
var result = firstResult(2);

console.log(firstResult);
console.log(result); // 5



var a = 1;
function b() {
    a = 10;
    console.log(a); // this returns 10 because it is declared inside the function b and it's the local variable.
    return;
    function a() {}
}
b();
console.log(a); // 1  a is global variable and anywhere you call it returns 1 and this is because it's called outside of function b. Closure is a function that allows accessing of an outer function's scope from an inner function i.e it controls what's in and outside a function.
