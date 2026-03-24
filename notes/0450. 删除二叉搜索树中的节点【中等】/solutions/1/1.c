struct TreeNode* deleteNode(struct TreeNode* root, int key) {
    if (!root) return NULL;
    if (key < root->val) {
        root->left = deleteNode(root->left, key);
    } else if (key > root->val) {
        root->right = deleteNode(root->right, key);
    } else {
        if (!root->left) { struct TreeNode* r = root->right; free(root); return r; }
        if (!root->right) { struct TreeNode* l = root->left; free(root); return l; }
        struct TreeNode* succ = root->right;
        while (succ->left) succ = succ->left;
        root->val = succ->val;
        root->right = deleteNode(root->right, succ->val);
    }
    return root;
}
