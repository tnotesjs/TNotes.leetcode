bool isCompleteTree(struct TreeNode* root) {
    struct TreeNode* queue[200];
    int front = 0, rear = 0;
    queue[rear++] = root;
    int seenNull = 0;

    while (front < rear) {
        struct TreeNode* node = queue[front++];
        if (!node) {
            seenNull = 1;
        } else {
            if (seenNull) return false;
            queue[rear++] = node->left;
            queue[rear++] = node->right;
        }
    }

    return true;
}
