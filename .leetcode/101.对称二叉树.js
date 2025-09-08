/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    
    // 辅助函数，用于判断两个子树是否镜像对称
    function isMirror(left, right) {
        // 如果两个节点都为空，则对称
        if (!left && !right) return true;
        
        // 如果只有一个节点为空，则不对称
        if (!left || !right) return false;
        
        // 如果两个节点值不相等，则不对称
        if (left.val !== right.val) return false;
        
        // 递归判断：左子树的左子树与右子树的右子树对称，
        // 且左子树的右子树与右子树的左子树对称
        return isMirror(left.left, right.right) && 
               isMirror(left.right, right.left);
    }
    
    // 判断根节点的左右子树是否镜像对称
    return isMirror(root.left, root.right);
};
// @lc code=end

