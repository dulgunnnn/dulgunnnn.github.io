/* Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words. */
String.prototype.filter = function (keyword) {
  return this.split(" ")
    .filter((item) => item !== keyword)
    .join(" ");
};
