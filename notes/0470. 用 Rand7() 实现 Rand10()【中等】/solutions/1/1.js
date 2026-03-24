/**
 * @return {number}
 */
var rand10 = function () {
  let num
  do {
    num = (rand7() - 1) * 7 + rand7() // 1~49 均匀
  } while (num > 40)
  return ((num - 1) % 10) + 1
}
