/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  const BULKY_DIMENSION = 10000
  const BULKY_VOLUME = 1000000000
  const HEAVY_MASS = 100

  // 判断是否为 Bulky
  const isBulky =
    length >= BULKY_DIMENSION ||
    width >= BULKY_DIMENSION ||
    height >= BULKY_DIMENSION ||
    length * width * height >= BULKY_VOLUME

  // 判断是否为 Heavy
  const isHeavy = mass >= HEAVY_MASS

  // 根据条件返回分类
  if (isBulky && isHeavy) return 'Both'
  if (isBulky) return 'Bulky'
  if (isHeavy) return 'Heavy'
  return 'Neither'
}
