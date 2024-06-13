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
  let result = "";

  let arr = str.split("").map((element) => {
    let elCode = element.charCodeAt();
    if (elCode + key > 122) {
      return ((elCode + key) % 122) + 96;
    } else if (elCode + key < 97) {
      return 123 - (97 % (elCode + key));
    } else {
      return elCode + key;
    }
  });

  result = String.fromCharCode(...arr);
  return result;
}

export { capitalize, reverseString, calculator, caesarCipher };
