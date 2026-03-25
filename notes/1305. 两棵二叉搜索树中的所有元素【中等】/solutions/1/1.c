void inorder(struct TreeNode* node, int* arr, int* size) {
    if (!node) return;
    inorder(node->left, arr, size);
    arr[(*size)++] = node->val;
    inorder(node->right, arr, size);
}

int* getAllElements(struct TreeNode* root1, struct TreeNode* root2, int* returnSize) {
    int* a = malloc(sizeof(int) * 5001);
    int* b = malloc(sizeof(int) * 5001);
    int sa = 0, sb = 0;
    inorder(root1, a, &sa);
    inorder(root2, b, &sb);
    int* res = malloc(sizeof(int) * (sa + sb));
    *returnSize = sa + sb;
    int i = 0, j = 0, k = 0;
    while (i < sa && j < sb) {
        if (a[i] <= b[j]) res[k++] = a[i++];
        else res[k++] = b[j++];
    }
    while (i < sa) res[k++] = a[i++];
    while (j < sb) res[k++] = b[j++];
    free(a);
    free(b);
    return res;
}
