interface Array<T> {
  snail(rowsCount: number, colsCount: number): number[][];
}

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number
): number[][] {
  // 处理无效输入
  if (rowsCount * colsCount !== this.length) {
    return [];
  }

  // 二维数组初始化
  const ans: number[][] = Array.from({ length: rowsCount }, () =>
    Array(colsCount)
  );

  for (let i = 0, j = 1, r = 0, c = 0; i < this.length; i++) {
    ans[r][c] = this[i];

    r += j; // 偏移

    // 越界处理
    if (r === rowsCount || r === -1) {
      r -= j;
      j = -j;
      c++;
    }
  }
  return ans;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
