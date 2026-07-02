/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* buildTree(int* inorder, int inorderSize, int* postorder, int postorderSize) {
    if (inorderSize == 0) return NULL;

    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = postorder[postorderSize - 1];
    root->left = NULL;
    root->right = NULL;

    int idx = 0;
    while (inorder[idx] != root->val) idx++;

    root->left = buildTree(inorder, idx, postorder, idx);
    root->right = buildTree(inorder + 1 + idx, inorderSize - 1 - idx,
                            postorder + idx, postorderSize - 1 - idx);
    return root;
}
