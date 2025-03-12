function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    const anotherNum = target - item;
    if (map.has(anotherNum)) {
      return [i, map.get(anotherNum)!];
    }
    map.set(item, i);
  }
  return [];
}