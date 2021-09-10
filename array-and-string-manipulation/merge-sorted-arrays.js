/**
 * Write a function to merge our arrays of orders into one sorted array.
 */

const mergeArrays = (arr1, arr2) => {
  var merged_array = [];
  var arr1_idx = 0,
    arr2_idx = 0;

  while (merged_array.length < arr1.length + arr2.length) {
    if (arr1[arr1_idx] <= arr2[arr2_idx] || !arr2[arr2_idx]) {
      merged_array.push(arr1[arr1_idx]);
      arr1_idx++;
    } else if (arr2[arr2_idx] <= arr1[arr1_idx] || !arr1[arr1_idx]) {
      merged_array.push(arr2[arr2_idx]);
      arr2_idx++;
    }
  }

  return merged_array;
};

const myArray = [3];
const alicesArray = [1, 5, 8, 11, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
