/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, everyOtherWord = "") {
  if (i > str.length - 1) return everyOtherWord;
  everyOtherWord += str[i];
  return everyOther(str, i + 2, everyOtherWord);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) {
    return true;
  }
  if (str[start] === str[end]) {
    return isPalindrome(str, start + 1, end - 1);
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;

  if (arr[i] === val) {
    return i;
  } else {
    return findIndex(arr, val, i + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, reverse = "") {
  if (i < 0) return reverse;
  reverse += str[i];
  return revString(str, i - 1, reverse);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    }
    if (typeof obj[key] === "object") {
      result.push(...gatherStrings(obj[key]));
    }
  }

  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  let middle = Math.floor((start + end) / 2);

  if (val === arr[middle]) {
    return middle;
  }

  if (start >= end) {
    return -1;
  }

  if (val > middle) {
    return binarySearch(arr, val, (start = middle + 1), end);
  } else {
    return binarySearch(arr, val, start, end - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
