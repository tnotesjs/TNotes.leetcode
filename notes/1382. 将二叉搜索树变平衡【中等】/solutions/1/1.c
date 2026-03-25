// 中序遍历收集节点值
void inorder(struct TreeNode* node, int* arr, int* size) {
    if (!node) return;
    inorder(node->left, arr, size);
    arr[(*size)++] = node->val;
    inorder(node->right, arr, size);
}

struct TreeNode* build(int* arr, int lo, int hi) {
    if (lo > hi) return NULL;
    int mid = (lo + hi) / 2;
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = arr[mid];
    node->left = build(arr, lo, mid - 1);
    node->right = build(arr, mid + 1, hi);
    return node;
}

struct TreeNode* balanceBST(struct TreeNode* root) {
    int arr[10001];
    int size = 0;
    inorder(root, arr, &size);
    return build(arr, 0, size - 1);
}
