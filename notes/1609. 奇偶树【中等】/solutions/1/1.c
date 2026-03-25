bool isEvenOddTree(struct TreeNode* root) {
    struct TreeNode* queue[100001];
    int front = 0, rear = 0;
    queue[rear++] = root;
    int level = 0;
    while (front < rear) {
        int size = rear - front;
        int prev = (level % 2 == 0) ? -1 : 0x7fffffff;
        for (int i = 0; i < size; i++) {
            struct TreeNode* node = queue[front++];
            int v = node->val;
            if (level % 2 == 0) {
                if (v % 2 == 0 || v <= prev) return false;
            } else {
                if (v % 2 == 1 || v >= prev) return false;
            }
            prev = v;
            if (node->left) queue[rear++] = node->left;
            if (node->right) queue[rear++] = node->right;
        }
        level++;
    }
    return true;
}
