/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int postorderIndex;
int map[6001];

struct TreeNode* dfs(int* postorder, int* inorder, int inLeft, int inRight) {
    if (inLeft > inRight) return NULL;

    int rootVal = postorder[postorderIndex--];
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = rootVal;
    root->left = NULL;
    root->right = NULL;

    int rootIndex = map[rootVal + 3000];

    // 先构建右子树，再构建左子树（因为 postorderIndex 从后向前递减）
    root->right = dfs(postorder, inorder, rootIndex + 1, inRight);
    root->left = dfs(postorder, inorder, inLeft, rootIndex - 1);
    return root;
}

struct TreeNode* buildTree(int* inorder, int inorderSize, int* postorder, int postorderSize) {
    postorderIndex = postorderSize - 1;
    for (int i = 0; i < inorderSize; i++)
        map[inorder[i] + 3000] = i;
    return dfs(postorder, inorder, 0, inorderSize - 1);
}
