/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  const match = (list, tree) => {
    if (!list) return true
    if (!tree) return false
    if (list.val !== tree.val) return false
    return match(list.next, tree.left) || match(list.next, tree.right)
  }
  if (!root) return false
  return (
    match(head, root) ||
    isSubPath(head, root.left) ||
    isSubPath(head, root.right)
  )
}
