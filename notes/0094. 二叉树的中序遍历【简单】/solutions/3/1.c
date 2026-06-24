/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* inorderTraversal(struct TreeNode* root, int* returnSize) {
    int* result = (int*)malloc(sizeof(int) * 100);
    *returnSize = 0;
    struct TreeNode* cur = root;

    while (cur) {
        if (!cur->left) {
            // 情况一：没有左子树，直接访问当前节点
            result[(*returnSize)++] = cur->val;
            cur = cur->right;
        } else {
            // 情况二：有左子树，找中序前驱节点
            struct TreeNode* pred = cur->left;
            while (pred->right && pred->right != cur)
                pred = pred->right;

            if (!pred->right) {
                // 第一次来到 cur，建立线索，继续向左走
                pred->right = cur;
                cur = cur->left;
            } else {
                // 第二次回到 cur，说明左子树已遍历完成
                pred->right = NULL; // 恢复原树结构
                result[(*returnSize)++] = cur->val;
                cur = cur->right;
            }
        }
    }

    return result;
}
