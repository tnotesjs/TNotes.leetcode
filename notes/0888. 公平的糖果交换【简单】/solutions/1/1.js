/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  // 计算Alice和Bob的糖果总数
  const sumAlice = aliceSizes.reduce((a, b) => a + b, 0)
  const sumBob = bobSizes.reduce((a, b) => a + b, 0)

  // 计算差值的一半
  const diff = (sumAlice - sumBob) / 2

  // 将Bob的糖果棒大小存入Set中，便于快速查找
  const bobSet = new Set(bobSizes)

  // 遍历Alice的糖果棒
  for (let alice of aliceSizes) {
    // 根据公式计算Bob需要交换的糖果棒大小
    const bob = alice - diff
    // 如果Bob有这种大小的糖果棒，则返回交换方案
    if (bobSet.has(bob)) {
      return [alice, bob]
    }
  }
}
