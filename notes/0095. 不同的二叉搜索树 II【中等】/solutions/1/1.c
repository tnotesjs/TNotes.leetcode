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
struct TreeNode** build(int lo, int hi, int* returnSize) {
    if (lo > hi) {
        *returnSize = 1;
        struct TreeNode** res = (struct TreeNode**)malloc(sizeof(struct TreeNode*));
        res[0] = NULL;
        return res;
    }
    struct TreeNode** result = NULL;
    *returnSize = 0;

    for (int i = lo; i <= hi; i++) {
        int leftSize, rightSize;
        struct TreeNode** lefts = build(lo, i - 1, &leftSize);
        struct TreeNode** rights = build(i + 1, hi, &rightSize);

        result = (struct TreeNode**)realloc(result, sizeof(struct TreeNode*) * (*returnSize + leftSize * rightSize));
        for (int l = 0; l < leftSize; l++) {
            for (int r = 0; r < rightSize; r++) {
                struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
                root->val = i;
                root->left = lefts[l];
                root->right = rights[r];
                result[(*returnSize)++] = root;
            }
        }
        free(lefts);
        free(rights);
    }
    return result;
}

struct TreeNode** generateTrees(int n, int* returnSize) {
    return build(1, n, returnSize);
}
