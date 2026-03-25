struct Pair { struct TreeNode* node; int depth; };

struct Pair dfs(struct TreeNode* node) {
    if (!node) return (struct Pair){NULL, 0};
    struct Pair left = dfs(node->left);
    struct Pair right = dfs(node->right);
    if (left.depth > right.depth) return (struct Pair){left.node, left.depth + 1};
    if (right.depth > left.depth) return (struct Pair){right.node, right.depth + 1};
    return (struct Pair){node, left.depth + 1};
}

struct TreeNode* lcaDeepestLeaves(struct TreeNode* root) {
    return dfs(root).node;
}
