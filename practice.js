function Fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(Fibonacci(7));

// big-O  = O(n) linear
function FactorialNumber(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(FactorialNumber(5));
console.log(FactorialNumber(10));
// big-O  = O(n) linear
