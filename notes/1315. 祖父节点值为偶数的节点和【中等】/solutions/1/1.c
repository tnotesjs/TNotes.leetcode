int ans;

void dfs(struct TreeNode* node, int parent, int grandparent) {
    if (!node) return;
    if (grandparent % 2 == 0) ans += node->val;
    dfs(node->left, node->val, parent);
    dfs(node->right, node->val, parent);
}

int sumEvenGrandparent(struct TreeNode* root) {
    ans = 0;
    dfs(root, 1, 1);
    return ans;
}
