int leftCount_g, rightCount_g;

int count(struct TreeNode* node, int x) {
    if (!node) return 0;
    int l = count(node->left, x);
    int r = count(node->right, x);
    if (node->val == x) {
        leftCount_g = l;
        rightCount_g = r;
    }
    return l + r + 1;
}

bool btreeGameWinningMove(struct TreeNode* root, int n, int x) {
    leftCount_g = rightCount_g = 0;
    count(root, x);
    int parent = n - leftCount_g - rightCount_g - 1;
    int half = n / 2;
    return leftCount_g > half || rightCount_g > half || parent > half;
}
