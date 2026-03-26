/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int sortedArr2476[100001];
int sortedCnt2476;

void inorder2476(struct TreeNode *node) {
    if (!node) return;
    inorder2476(node->left);
    sortedArr2476[sortedCnt2476++] = node->val;
    inorder2476(node->right);
}

int bisectLeft2476(int *arr, int n, int target) {
    int lo = 0, hi = n;
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        if (arr[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** closestNodes(struct TreeNode* root, int* queries, int queriesSize, int* returnSize, int** returnColumnSizes) {
    sortedCnt2476 = 0;
    inorder2476(root);
    int n = sortedCnt2476;
    *returnSize = queriesSize;
    *returnColumnSizes = (int *)malloc(queriesSize * sizeof(int));
    int **res = (int **)malloc(queriesSize * sizeof(int *));
    for (int i = 0; i < queriesSize; i++) {
        res[i] = (int *)malloc(2 * sizeof(int));
        (*returnColumnSizes)[i] = 2;
        int idx = bisectLeft2476(sortedArr2476, n, queries[i]);
        if (idx < n && sortedArr2476[idx] == queries[i]) {
            res[i][0] = res[i][1] = queries[i];
        } else {
            res[i][0] = idx > 0 ? sortedArr2476[idx - 1] : -1;
            res[i][1] = idx < n ? sortedArr2476[idx] : -1;
        }
    }
    return res;
}
