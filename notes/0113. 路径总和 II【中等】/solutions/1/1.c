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
int** g_ans;
int* g_colSizes;
int g_ansSize;
int g_path[5001];
int g_pathLen;

void dfs(struct TreeNode* node, int remain) {
    if (!node) return;
    g_path[g_pathLen++] = node->val;
    remain -= node->val;
    if (!node->left && !node->right && remain == 0) {
        g_ans[g_ansSize] = (int*)malloc(g_pathLen * sizeof(int));
        memcpy(g_ans[g_ansSize], g_path, g_pathLen * sizeof(int));
        g_colSizes[g_ansSize] = g_pathLen;
        g_ansSize++;
    }
    dfs(node->left, remain);
    dfs(node->right, remain);
    g_pathLen--;
}

int** pathSum(struct TreeNode* root, int targetSum, int* returnSize, int** returnColumnSizes) {
    g_ans = (int**)malloc(5000 * sizeof(int*));
    g_colSizes = (int*)malloc(5000 * sizeof(int));
    g_ansSize = 0;
    g_pathLen = 0;
    dfs(root, targetSum);
    *returnSize = g_ansSize;
    *returnColumnSizes = g_colSizes;
    return g_ans;
}
