/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  let isEqual = expected === found;

  if (isEqual) {
    return "TEST SUCCEEDED";
  } else {
    console.assert(
      isEqual,
      "TEST FAILED.  Expected " + expected + " found " + found
    );
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

function myFunctionTestForStringArray(expected, found) {
  return (
    Array.isArray(expected) &&
    Array.isArray(found) &&
    expected.length === found.length &&
    expected.every((val, index) => val === found[index])
  );
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(
  "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

console.log(
  "Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

function isVowel(char) {
  // parameter char must be character
  if (typeof char !== "string" || char.length !== 1) return;

  char = char.toLowerCase();
  return (
    char === "a" || char === "e" || char === "o" || char === "u" || char === "i"
  );
}
console.log(
  "Expected output of isVowel('A') is true  " +
    myFunctionTest(true, isVowel("A"))
);
console.log(
  "Expected output of isVowel('B') is false  " +
    myFunctionTest(false, isVowel("B"))
);

function sum(arr) {
  let sum = 0;
  arr.map((item) => (sum += item));
  return sum;
}
const arr = [1, 2, 3, 4];
const arr2 = [2, 8, 7, 3, 9, 11];
console.log(
  "Expected output of sum(arr) is 10  " + myFunctionTest(10, sum(arr))
);
console.log(
  "Expected output of sum(arr2) is 40  " + myFunctionTest(41, sum(arr2))
);

function multiply(arr) {
  let multiply = 1;
  arr.map((item) => (multiply *= item));
  return multiply;
}

console.log(
  "Expected output of multiply(arr) is 24  " + myFunctionTest(24, multiply(arr))
);
console.log(
  "Expected output of multiply(arr2) is 33264  " +
    myFunctionTest(33264, multiply(arr2))
);

function reverse(str) {
  if (typeof str !== "string") return;

  let result = "";
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
}

console.log(
  "Expected output of reverse('WAP') is PAW  " +
    myFunctionTest("PAW", reverse("WAP"))
);
console.log(
  "Expected output of reverse('Fairfield, Iowa') is 'awoI ,dleifriaF'  " +
    myFunctionTest("awoI ,dleifriaF", reverse("Fairfield, Iowa"))
);

function findLongestWord(arr) {
  max = arr[0].length;
  arr.map((item) => {
    if (item.length > max) max = item.length;
  });

  return max;
}

const arrayOfWords = ["one", "two", "three", "four", "five"];
const arrayOfWords2 = [
  "Maharishi",
  "International",
  "University",
  "Fairfield",
  "Iowa",
];

console.log(
  "Expected output of findLongestWord(arr) is 5  " +
    myFunctionTest(5, findLongestWord(arrayOfWords))
);
console.log(
  "Expected output of findLongestWord(arr) is 13  " +
    myFunctionTest(13, findLongestWord(arrayOfWords2))
);

function filterLongWords(arr, i) {
  let result = [];
  arr.map((item) => {
    if (item.length > i) result[result.length] = item;
  });
  console.assert("result");
  return result;
}

console.log(
  "Expected output of filterLongWords(arr) is ['three', 'four', 'five']  " +
    myFunctionTestForStringArray(
      ["three", "four", "five"],
      filterLongWords(arrayOfWords, 3)
    )
);
console.log(
  "Expected output of filterLongWords(arr) is ['International', 'University']  " +
    myFunctionTestForStringArray(
      ["International", "University"],
      filterLongWords(arrayOfWords2, 9)
    )
);

// jsfiddle codes
console.log("--------------------");

const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
  return elem * 10;
});
document.writeln(b.toString() + "<br/>");
const c = a.filter(function (elem, i, array) {
  return elem === 3;
});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue + elem;
});
document.writeln(d + "<br/>");

const d2 = a.find(function (elem) {
  return elem > 1;
}); //3
const d3 = a.findIndex(function (elem) {
  return elem > 1;
}); //1
document.writeln(d2 + "<br/>");
document.writeln(d3 + "<br/>");
