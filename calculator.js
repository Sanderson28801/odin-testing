export const calculator = (function () {
  function add(x, y) {
    return x + y;
  }
  function subtract(x, y) {
    return x - y;
  }
  function multiply(x, y) {
    return x * y;
  }
  function divide(x, y) {
    return x / y;
  }
  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();
