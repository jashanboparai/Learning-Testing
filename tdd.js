function isPalindrome(input) {
  if (typeof input !== "string" && typeof input !== "number") {
    return null;
  }
  if (typeof input === "number" && input < 0) {
    input = Math.abs(input);
  }

  const str = String(input).trim().toLowerCase();

  if (str.length > 10) {
    return null;
  }

  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

module.exports = { isPalindrome };
