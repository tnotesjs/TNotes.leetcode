/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** zigzagLevelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    if (!root) { *returnColumnSizes = NULL; return NULL; }

    int** ans = (int**)malloc(2000 * sizeof(int*));
    *returnColumnSizes = (int*)malloc(2000 * sizeof(int));
    struct TreeNode* queue[2001];
    int front = 0, rear = 0;
    queue[rear++] = root;
    int leftToRight = 1;

    while (front < rear) {
        int size = rear - front;
        ans[*returnSize] = (int*)malloc(size * sizeof(int));
        (*returnColumnSizes)[*returnSize] = size;
        for (int i = 0; i < size; i++) {
            struct TreeNode* node = queue[front++];
            int idx = leftToRight ? i : size - 1 - i;
            ans[*returnSize][idx] = node->val;
            if (node->left) queue[rear++] = node->left;
            if (node->right) queue[rear++] = node->right;
        }
        leftToRight = !leftToRight;
        (*returnSize)++;
    }

    return ans;
}
