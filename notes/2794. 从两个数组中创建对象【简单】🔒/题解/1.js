/**
 * @param {Array} keysArr
 * @param {Array} valuesArr
 * @return {Object}
 */
var createObject = function (keysArr, valuesArr) {
  const obj = {}
  for (let i = 0; i < keysArr.length; i++) {
    const key = keysArr[i]
    if (!Object.hasOwn(obj, key)) obj[key] = valuesArr[i]
  }
  return obj
};