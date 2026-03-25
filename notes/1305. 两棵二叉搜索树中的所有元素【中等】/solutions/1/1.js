/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const list1 = [],
    list2 = []
  const inorder = (node, list) => {
    if (!node) return
    inorder(node.left, list)
    list.push(node.val)
    inorder(node.right, list)
  }
  inorder(root1, list1)
  inorder(root2, list2)
  // 归并两个有序数组
  const res = []
  let i = 0,
    j = 0
  while (i < list1.length && j < list2.length) {
    if (list1[i] <= list2[j]) res.push(list1[i++])
    else res.push(list2[j++])
  }
  while (i < list1.length) res.push(list1[i++])
  while (j < list2.length) res.push(list2[j++])
  return res
}
