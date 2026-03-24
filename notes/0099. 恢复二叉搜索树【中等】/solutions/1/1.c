/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
void recoverTree(struct TreeNode* root) {
    struct TreeNode *first = NULL, *second = NULL, *prev = NULL;
    struct TreeNode *cur = root;
    // Morris 中序遍历
    while (cur) {
        if (cur->left) {
            struct TreeNode *pred = cur->left;
            while (pred->right && pred->right != cur)
                pred = pred->right;
            if (!pred->right) {
                pred->right = cur;
                cur = cur->left;
            } else {
                pred->right = NULL;
                if (prev && prev->val > cur->val) {
                    if (!first) first = prev;
                    second = cur;
                }
                prev = cur;
                cur = cur->right;
            }
        } else {
            if (prev && prev->val > cur->val) {
                if (!first) first = prev;
                second = cur;
            }
            prev = cur;
            cur = cur->right;
        }
    }
    int tmp = first->val;
    first->val = second->val;
    second->val = tmp;
}
