/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ')
}

/* 执行流程：
// 1. 先将字符串按照空格进行拆分，得到一个新数组
"Let's take LeetCode contest".split(' ')
// => ["Let's", "take", "LeetCode", "contest"]

// 2. 再对每一项进行反转，在反转过程中，需要将其转为 Array 类型
"Let's take LeetCode contest"
  .split(' ')
  .map((item) => item.split('').reverse().join(''))
// => ["s'teL", 'ekat', 'edoCteeL', 'tsetnoc']

// 3. 最后将结果拼接为一个字符串即可
"Let's take LeetCode contest"
  .split(' ')
  .map((item) => item.split('').reverse().join(''))
  .join(' ')
// => "s'teL ekat edoCteeL tsetnoc" */
