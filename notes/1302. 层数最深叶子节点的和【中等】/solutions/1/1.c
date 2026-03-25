int maxDepth, sum;

void dfs(struct TreeNode* node, int depth) {
    if (!node) return;
    if (depth > maxDepth) {
        maxDepth = depth;
        sum = node->val;
    } else if (depth == maxDepth) {
        sum += node->val;
    }
    dfs(node->left, depth + 1);
    dfs(node->right, depth + 1);
}

int deepestLeavesSum(struct TreeNode* root) {
    maxDepth = 0;
    sum = 0;
    dfs(root, 0);
    return sum;
}
