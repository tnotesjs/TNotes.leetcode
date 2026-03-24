char* tree2str(struct TreeNode* root) {
    if (!root) { char* s = (char*)malloc(1); s[0] = '\0'; return s; }
    char* left = tree2str(root->left);
    char* right = tree2str(root->right);
    char* res = (char*)malloc(100000);
    if (!root->left && !root->right) {
        sprintf(res, "%d", root->val);
    } else if (!root->right) {
        sprintf(res, "%d(%s)", root->val, left);
    } else {
        sprintf(res, "%d(%s)(%s)", root->val, left, right);
    }
    free(left); free(right);
    return res;
}
