function earliestSpace(str1, str2, str3) {
  let lowest = null;
  let lowestNumber = null;

  for (let i = 0; i < arguments.length; i++) {
    if (lowest === null) {
      lowest = arguments[i];
      lowestNumber = arguments[i].indexOf(" ");
    }

    if (lowestNumber > arguments[i].indexOf(" ")) {
      lowest = arguments[i];
      lowestNumber = arguments[i].indexOf(" ");
    }
  }
  return lowest;
}

/* Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words. */
String.prototype.filter = function (keyword) {
  return this.split(" ")
    .filter((item) => item !== keyword)
    .join(" ");
};

//Exercise 2:
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++)
    for (let j = 0; j < this.length - i - 1; j++)
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }

  return this;
};

//Exercise 3:
let Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};

let Teacher = function () {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  return this.name + " is now teaching " + subject;
};

let me = new Teacher();

me.initialize("Bryant", 35);
me.teach("Inheritance");
