/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1
    let right = n

    while (left < right) {
      const mid = Math.floor(left + (right - left) / 2)

      if (isBadVersion(mid)) {
        // mid 是错误版本，第一个错误版本可能是 mid 或在其左侧
        right = mid
      } else {
        // mid 是正确版本，第一个错误版本在其右侧
        left = mid + 1
      }
    }

    return left
  }
}
