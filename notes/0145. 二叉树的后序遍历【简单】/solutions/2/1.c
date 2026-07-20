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
int* postorderTraversal(struct TreeNode* root, int* returnSize) {
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

        if (node->left)
            stack[top++] = node->left;
        if (node->right)
            stack[top++] = node->right;
    }

    // 反转结果：根-右-左 -> 左-右-根
    for (int i = 0, j = *returnSize - 1; i < j; i++, j--) {
        int tmp = result[i];
        result[i] = result[j];
        result[j] = tmp;
    }

    return result;
}
