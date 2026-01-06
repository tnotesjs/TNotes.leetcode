/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0

  // 遍历 arr1 中的每个元素
  for (const num1 of arr1) {
    let isValid = true

    // 检查当前元素是否与 arr2 中所有元素的距离都大于 d
    for (const num2 of arr2) {
      if (Math.abs(num1 - num2) <= d) {
        isValid = false
        break // 找到一个不符合条件的就跳出
      }
    }

    if (isValid) {
      count++
    }
  }

  return count
}

// 使用 every 方法的简化版本：
/* 
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    
    for (const num1 of arr1) {
        // 使用 every 方法检查是否所有 arr2 元素都满足条件
        if (arr2.every(num2 => Math.abs(num1 - num2) > d)) {
            count++;
        }
    }
    
    return count;
};
*/
