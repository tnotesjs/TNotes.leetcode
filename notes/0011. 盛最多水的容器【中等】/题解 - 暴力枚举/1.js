/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length;
  let maxArea = (len - 1) * Math.min(height[0], height[len - 1]);

  // →
  for (let l = 0; l < len; l++) {
    for (let r = len - 1; r > l; r--) {
      if (height[r] >= height[l]) {
        const area = (r - l) * height[l];
        maxArea = maxArea > area ? maxArea : area;
        break;
      }
    }
  }

  // ←
  for (let r = len - 1; r > 0; r--) {
    for (let l = 0; l < r; l++) {
      if (height[l] >= height[r]) {
        const area = (r - l) * height[r];
        maxArea = maxArea > area ? maxArea : area;
        break;
      }
    }
  }

  return maxArea;
};
