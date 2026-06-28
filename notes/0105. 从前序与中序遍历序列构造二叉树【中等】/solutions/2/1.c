/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int preorderIndex = 0;
int map[6001]; // 值域 [-3000, 3000]，偏移 3000

struct TreeNode* dfs(int* preorder, int* inorder, int inLeft, int inRight) {
    if (inLeft > inRight)
        return NULL;

    int rootVal = preorder[preorderIndex++];
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = rootVal;
    root->left = NULL;
    root->right = NULL;

    int rootIndex = map[rootVal + 3000];

    root->left = dfs(preorder, inorder, inLeft, rootIndex - 1);
    root->right = dfs(preorder, inorder, rootIndex + 1, inRight);
    return root;
}

struct TreeNode* buildTree(int* preorder, int preorderSize, int* inorder,
                           int inorderSize) {
    preorderIndex = 0;
    for (int i = 0; i < inorderSize; i++)
        map[inorder[i] + 3000] = i;
    return dfs(preorder, inorder, 0, inorderSize - 1);
}
