var maxArea = function (height) {
  const len = height.length;
  let l = 0,
    r = len - 1,
    max_area = 0;

  while (l < r) {
    max_area = Math.max(max_area, (r - l) * Math.min(height[l], height[r]));
    height[l] < height[r] ? l++ : r--;
  }

  return max_area;
};
