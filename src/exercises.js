function commonEnd(a, b) {
    if (!a || a.length === 0 || !b || b.length === 0) {
        return false;
    }
    else if (a[0] === b[0]) {
        return true;
    }
    else if (a[a.length - 1] === b[b.length - 1]) {
        return true;
    }
    else {
        return false;
    }
}

function endsMeet(values, n) {
    if (!values || values.length === 0) {
        return [];
    }
    if (n <= 0) {
        return [];
    }
    if (values.length < n) {
        return [];
    }
    let array1 = values.slice(0, n);
    let array2 = values.slice(-n);
    return array1.concat(array2);
}

function difference(numbers) {
      if (!numbers || numbers.length === 0) {
          return undefined;
      }

      var large = numbers[0];
      var small = numbers[0];

      for (i = 0; i < numbers.length; i++) {

          if (isNaN(numbers[i])) {
              return undefined;
          } if (large < numbers[i]) {
                large = numbers[i];
          } if (small > numbers[i]) {
                small = numbers[i];
          }
      }
      return large - small;
  }


function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
