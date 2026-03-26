int count2265;

void dfs2265(struct TreeNode* node, int *outSum, int *outCnt) {
    if (!node) { *outSum = 0; *outCnt = 0; return; }
    int lSum, lCnt, rSum, rCnt;
    dfs2265(node->left, &lSum, &lCnt);
    dfs2265(node->right, &rSum, &rCnt);
    *outSum = lSum + rSum + node->val;
    *outCnt = lCnt + rCnt + 1;
    if (*outSum / *outCnt == node->val) count2265++;
}

int averageOfSubtree(struct TreeNode* root) {
    count2265 = 0;
    int s, c;
    dfs2265(root, &s, &c);
    return count2265;
}
