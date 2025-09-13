/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // 如果长度不同，肯定不是同构字符串
  if (s.length !== t.length) return false

  // 建立两个映射表，确保双向一一映射
  const mapS2T = {} // s 到 t 的映射
  // {
  //   e: "a",
  //   g: "d",
  // }
  const mapT2S = {} // t 到 s 的映射
  // {
  //   a: "e",
  //   d: "g",
  // }

  for (let i = 0; i < s.length; i++) {
    const charS = s[i]
    const charT = t[i]

    // 检查 s 到 t 的映射
    if (mapS2T[charS] !== undefined) {
      // 如果已存在映射但与当前字符不一致，则不是同构字符串
      if (mapS2T[charS] !== charT) {
        return false
      }
    } else {
      // 建立新的映射
      mapS2T[charS] = charT
    }

    // 检查 t 到 s 的映射
    if (mapT2S[charT] !== undefined) {
      // 如果已存在映射但与当前字符不一致，则不是同构字符串
      if (mapT2S[charT] !== charS) {
        return false
      }
    } else {
      // 建立新的映射
      mapT2S[charT] = charS
    }
  }

  return true
}
