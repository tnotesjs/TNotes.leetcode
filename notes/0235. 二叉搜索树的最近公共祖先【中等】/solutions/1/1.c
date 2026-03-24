struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {
    struct TreeNode* node = root;
    while (node) {
        if (p->val < node->val && q->val < node->val) node = node->left;
        else if (p->val > node->val && q->val > node->val) node = node->right;
        else return node;
    }
    return NULL;
}
