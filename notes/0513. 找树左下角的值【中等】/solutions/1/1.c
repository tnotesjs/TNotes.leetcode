int findBottomLeftValue(struct TreeNode* root) {
    struct TreeNode* queue[10000];
    int front = 0, rear = 0;
    queue[rear++] = root;
    int res = root->val;
    while (front < rear) {
        int size = rear - front;
        res = queue[front]->val;
        for (int i = 0; i < size; i++) {
            struct TreeNode* node = queue[front++];
            if (node->left) queue[rear++] = node->left;
            if (node->right) queue[rear++] = node->right;
        }
    }
    return res;
}
