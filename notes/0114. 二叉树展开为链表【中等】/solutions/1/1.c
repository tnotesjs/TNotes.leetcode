/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
void flatten(struct TreeNode* root) {
    struct TreeNode* cur = root;
    while (cur) {
        if (cur->left) {
            // 找左子树的最右节点
            struct TreeNode* pre = cur->left;
            while (pre->right) pre = pre->right;
            // 将右子树挂到左子树的最右节点
            pre->right = cur->right;
            // 左子树移到右边，左置空
            cur->right = cur->left;
            cur->left = NULL;
        }
        cur = cur->right;
    }
}
