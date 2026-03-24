struct TreeNode* addOneRow(struct TreeNode* root, int val, int depth) {
    if (depth == 1) {
        struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
        node->val = val; node->left = root; node->right = NULL;
        return node;
    }
    struct TreeNode* queue[10000];
    int head = 0, tail = 0;
    queue[tail++] = root;
    for (int d = 1; d < depth - 1; d++) {
        int size = tail - head;
        for (int i = 0; i < size; i++) {
            struct TreeNode* cur = queue[head++];
            if (cur->left) queue[tail++] = cur->left;
            if (cur->right) queue[tail++] = cur->right;
        }
    }
    for (int i = head; i < tail; i++) {
        struct TreeNode* cur = queue[i];
        struct TreeNode* nl = (struct TreeNode*)malloc(sizeof(struct TreeNode));
        struct TreeNode* nr = (struct TreeNode*)malloc(sizeof(struct TreeNode));
        nl->val = val; nl->left = cur->left; nl->right = NULL;
        nr->val = val; nr->left = NULL; nr->right = cur->right;
        cur->left = nl; cur->right = nr;
    }
    return root;
}
