/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
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
      if (mapT2S[charT] !== charS) {
        return false
      }
    } else {
      mapT2S[charT] = charS
    }
  }

  return true
}
// @lc code=end

isIsomorphic('egg', 'add')

// #region 1
/* 
双向映射

- 时间复杂度：O(n)，其中 n 是字符串的长度
- 空间复杂度：O(n)，需要存储字符映射关系

*/
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isIsomorphic = function (s, t) {
//   // 如果长度不同，肯定不是同构字符串
//   if (s.length !== t.length) return false

//   // 建立两个映射表，确保双向一一映射
//   const mapS2T = {} // s 到 t 的映射
//   const mapT2S = {} // t 到 s 的映射

//   for (let i = 0; i < s.length; i++) {
//     const charS = s[i]
//     const charT = t[i]

//     // 检查 s 到 t 的映射
//     if (mapS2T[charS] !== undefined) {
//       // 如果已存在映射但与当前字符不一致，则不是同构字符串
//       if (mapS2T[charS] !== charT) {
//         return false
//       }
//     } else {
//       // 建立新的映射
//       mapS2T[charS] = charT
//     }

//     // 检查 t 到 s 的映射
//     if (mapT2S[charT] !== undefined) {
//       // 如果已存在映射但与当前字符不一致，则不是同构字符串
//       if (mapT2S[charT] !== charS) {
//         return false
//       }
//     } else {
//       // 建立新的映射
//       mapT2S[charT] = charS
//     }
//   }

//   return true
// }
// #endregion

// #region 2
/* 
首次出现位置索引比较

- 时间复杂度：O(n²)，每次 indexOf 操作需要 O(n) 时间
- 空间复杂度：O(1)，只使用了常数额外空间

核心思想：如果两个字符串同构，那么相同字符在各自字符串中首次出现的位置必然相同。
*/

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isIsomorphic = function (s, t) {
//   // 如果长度不同，肯定不是同构字符串
//   if (s.length !== t.length) return false

//   for (let i = 0; i < s.length; i++) {
//     // 比较每个字符在各自字符串中首次出现的位置
//     if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
//       return false
//     }
//   }

//   return true
// }
// #endregion
