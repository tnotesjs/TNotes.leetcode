/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let modes = []
  let maxCount = 0
  let currentCount = 0
  let prevVal = null

  let current = root

  while (current !== null) {
    if (current.left === null) {
      // 【1】找到了未处理过的最左节点
      handleValue(current.val)
      current = current.right
    } else {
      // 找到当前节点的前驱节点
      let predecessor = current.left
      while (predecessor.right !== null && predecessor.right !== current) {
        predecessor = predecessor.right
      }

      if (predecessor.right === null) {
        // 利用空节点建立线索
        // 线索：记录的是处理完这个节点之后，下一个要处理的节点是谁
        predecessor.right = current
        current = current.left
      } else {
        // 恢复树结构
        predecessor.right = null
        // 【2】找到了下一个未处理过的最左节点
        handleValue(current.val)
        current = current.right
      }
    }
  }

  function handleValue(val) {
    // 更新当前值的计数
    if (prevVal === null || val !== prevVal) {
      currentCount = 1
    } else {
      currentCount++
    }

    // 更新众数列表
    if (currentCount > maxCount) {
      maxCount = currentCount
      modes = [val]
    } else if (currentCount === maxCount) {
      modes.push(val)
    }

    prevVal = val
  }

  return modes
}
