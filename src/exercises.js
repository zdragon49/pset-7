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
      if (!number || number.length === 0) {
          return undefined;
      }

      var len = number.length;

      if (len < 3) {
          return undefined;
      } if (len % 2 == 0) {
          return undefined;
      }
      var mid = parseInt(len / 2);

      var large = number[0];

      for (i = 0; i < len; i++) {

          if (isNaN(number[i])) {
              return undefined;
          }

          if (i == 0 || i == mid || i == (len - 1)) {

              if (large < number[i]) {
                  large = number[i];
              }
          }
      }

      return large;
  }

  function middle(values) {
      let blank = []
      if (!values || values.length < 3 || values.length % 2 == 0) {
          return [];
      }
      let ind = (values.length / 2) - 1 + 0.5
      let midTwo = values[ind]
      let midOne = values[ind - 1]
      let midThree = values[ind + 1]
      blank.push(midOne);
      blank.push(midTwo);
      blank.push(midThree);
      return blank;

  }

  function increasing(numbers) {
      let tag = 0;
      if (!numbers || numbers.length < 3 || numbers.some(isNaN) || numbers.some(Number.isInteger) === false) {
          return false;
      } else {
          for (let i = 0; i < numbers.length; i++) {
              if (numbers[i] < numbers[i + 1] && numbers[i + 1] < numbers[i + 2]) {
                  tag = 1;
                  return true;
              }
          }
          if (tag === 0) {
              return false;
          }
      }
  }


  function everywhere(values, x) {
      let tag = 1;
      if (!values || values.length < 1 || x === undefined) {
          return false;
      } else {

          for (let i = 0; i < values.length - 1; i++) {
              if (values[i] === x) {
                  tag = 0;
              } else if (values[i - 1] === x || values[i + 1] === x) {
                  tag = 0;
              } else {
                  tag = 1;
                  return false;
              }
          }
      }
      if (tag === 0) {
          return true;
      }

  }

  function consecutive(numbers) {
      if (!numbers || numbers.length === 0) {
          return false;
      }

      var len = numbers.length;

      if (len < 3) {
          return false;
      }
      for (i = 0; i < len; i++) {
          if (isNaN(numbers[i])) {
              return false;
          }
      }
      for (i = 0; i < numbers.length - 2; i++) {
          if ((numbers[i] % 2 == 0) && (numbers[i + 1] % 2 == 0) && (numbers[i + 2] % 2 == 0)) {
              return true;
          }
          if ((numbers[i] % 2 != 0) && (numbers[i + 1] % 2 != 0) && (numbers[i + 2] % 2 != 0)) {

              return true;
          }
      }

      return false;
  }

  function balance(numbers) {
      if (!numbers || numbers.length === 0) {
          return false;
      }

      var len = numbers.length;

      if (len < 2) {
          return false;
      }
      let lenSum = 0;

      for (i = 0; i < len; i++) {
          if (isNaN(numbers[i])) {
              return false;
          }
          lenSum += numbers[i];
      }
      let rSum = 0;
      for (i = len - 1; i >= 0; i--) {
          rSum += numbers[i];
          lenSum -= numbers[i];
          if (lenSum == rSum) {
              return true;
          }
      }
      return false;
  }

  function clumps(values) {
      if (!values) {
          return -1;
      }
      let temperature = "";
      let res = 0;
      let final = "";

      for (i = 0; i < values.length; i++) {

          if (values[i] == temperature) {
              if (final.length == 0) {
                  res++;
                  final = values[i];
              }
          } else {
              final = '';
          }
          temperature = values[i];
      }
      return res;
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
