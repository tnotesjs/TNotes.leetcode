/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return quickSort(nums, 0, nums.length);
};

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function quickSort(arr, begin, end) {
  if (begin >= end - 1) return arr; // 只有一项 直接 return
  let left = begin;
  let right = end;
  do {
    do left++;
    while (left < right && arr[left] < arr[begin]);

    do right--;
    while (left < right && arr[right] > arr[begin]);

    if (left < right) swap(arr, left, right);
  } while (left < right);

  const swapIdx = left === right ? right - 1 : right;
  swap(arr, begin, swapIdx);
  quickSort(arr, begin, swapIdx);
  quickSort(arr, swapIdx + 1, end);
  return arr;
}
