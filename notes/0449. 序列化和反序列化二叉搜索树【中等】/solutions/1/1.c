// 序列化：前序遍历
char* serialize(struct TreeNode* root) {
    char* buf = (char*)malloc(100000);
    buf[0] = '\0';
    int len = 0;
    void preorder(struct TreeNode* node) {
        if (!node) return;
        if (len > 0) buf[len++] = ',';
        len += sprintf(buf + len, "%d", node->val);
        preorder(node->left);
        preorder(node->right);
    }
    preorder(root);
    return buf;
}

// 反序列化：根据上下界递归重建
struct TreeNode* deserialize(char* data) {
    if (!data || !*data) return NULL;
    int vals[10000], n = 0;
    char* p = data;
    while (*p) {
        vals[n++] = (int)strtol(p, &p, 10);
        if (*p == ',') p++;
    }
    int idx = 0;
    struct TreeNode* build(int lo, int hi) {
        if (idx >= n || vals[idx] < lo || vals[idx] > hi) return NULL;
        struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
        node->val = vals[idx++];
        node->left = build(lo, node->val);
        node->right = build(node->val, hi);
        return node;
    }
    return build(-100001, 100001);
}
