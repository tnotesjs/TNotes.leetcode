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
void traverse(struct TreeNode* node, int* result, int* returnSize) {
    if (!node)
        return;

    traverse(node->left, result, returnSize);
    result[(*returnSize)++] = node->val;
    traverse(node->right, result, returnSize);
}

int* inorderTraversal(struct TreeNode* root, int* returnSize) {
    int* result = (int*)malloc(sizeof(int) * 100);
    *returnSize = 0;

    traverse(root, result, returnSize);
    return result;
}
