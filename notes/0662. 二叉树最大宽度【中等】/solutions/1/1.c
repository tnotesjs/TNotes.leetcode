// 简化实现，使用 unsigned long long 避免溢出
typedef struct { struct TreeNode* node; unsigned long long idx; } Pair;

int widthOfBinaryTree(struct TreeNode* root) {
    Pair queue[3001];
    int head = 0, tail = 0;
    queue[tail++] = (Pair){root, 0};
    unsigned long long maxW = 0;
    while (head < tail) {
        int size = tail - head;
        unsigned long long first = queue[head].idx;
        for (int i = 0; i < size; i++) {
            Pair p = queue[head++];
            unsigned long long idx = p.idx - first;
            if (i == size - 1 && idx + 1 > maxW) maxW = idx + 1;
            if (p.node->left) queue[tail++] = (Pair){p.node->left, 2 * idx};
            if (p.node->right) queue[tail++] = (Pair){p.node->right, 2 * idx + 1};
        }
    }
    return (int)maxW;
}
