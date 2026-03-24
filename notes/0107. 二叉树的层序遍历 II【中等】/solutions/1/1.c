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
int** levelOrderBottom(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    if (!root) { *returnColumnSizes = NULL; return NULL; }

    int** ans = (int**)malloc(2000 * sizeof(int*));
    int* colSizes = (int*)malloc(2000 * sizeof(int));
    struct TreeNode* queue[2001];
    int front = 0, rear = 0;
    queue[rear++] = root;

    while (front < rear) {
        int size = rear - front;
        ans[*returnSize] = (int*)malloc(size * sizeof(int));
        colSizes[*returnSize] = size;
        for (int i = 0; i < size; i++) {
            struct TreeNode* node = queue[front++];
            ans[*returnSize][i] = node->val;
            if (node->left) queue[rear++] = node->left;
            if (node->right) queue[rear++] = node->right;
        }
        (*returnSize)++;
    }

    // 翻转结果数组
    for (int i = 0, j = *returnSize - 1; i < j; i++, j--) {
        int* tmpRow = ans[i]; ans[i] = ans[j]; ans[j] = tmpRow;
        int tmpCol = colSizes[i]; colSizes[i] = colSizes[j]; colSizes[j] = tmpCol;
    }

    *returnColumnSizes = colSizes;
    return ans;
}
