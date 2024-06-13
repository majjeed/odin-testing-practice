function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(str, key) {
  return str
    .split("")
    .map((char) => {
      if (char.match(/[a-zA-Z]/)) {
        let code = char.charCodeAt(0);
        let base = code >= 65 && code <= 90 ? 65 : 97;

        let shiftedCode = ((code - base + key + 26) % 26) + base;

        return String.fromCharCode(shiftedCode);
      } else {
        return char;
      }
    })
    .join("");
}

function analyzeArray(arr) {
  let average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;
  return {
    average,
    min,
    max,
    length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
