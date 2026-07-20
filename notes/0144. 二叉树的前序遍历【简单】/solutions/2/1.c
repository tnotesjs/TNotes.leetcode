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
int* preorderTraversal(struct TreeNode* root, int* returnSize) {
    int* result = (int*)malloc(sizeof(int) * 100);
    *returnSize = 0;
    if (!root)
        return result;

    struct TreeNode* stack[100];
    int top = 0;
    stack[top++] = root;

    while (top > 0) {
        struct TreeNode* node = stack[--top];
        result[(*returnSize)++] = node->val;

        if (node->right)
            stack[top++] = node->right;
        if (node->left)
            stack[top++] = node->left;
    }

    return result;
}
