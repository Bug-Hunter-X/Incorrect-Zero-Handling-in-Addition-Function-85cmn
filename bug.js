function myFunction(a, b) {
  if (a === 0 || b === 0) { 
    return 0; //This line is wrong, it should be return a+b
  }
  return a + b;
}
console.log(myFunction(5, 0)); // Expected output: 5, Actual output: 0