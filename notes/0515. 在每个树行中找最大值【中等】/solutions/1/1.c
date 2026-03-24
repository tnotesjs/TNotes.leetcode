int* largestValues(struct TreeNode* root, int* returnSize) {
    *returnSize = 0;
    if (!root) return NULL;
    int* res = (int*)malloc(sizeof(int) * 10000);
    struct TreeNode* queue[10000];
    int front = 0, rear = 0;
    queue[rear++] = root;
    while (front < rear) {
        int size = rear - front;
        int max = queue[front]->val;
        for (int i = 0; i < size; i++) {
            struct TreeNode* node = queue[front++];
            if (node->val > max) max = node->val;
            if (node->left) queue[rear++] = node->left;
            if (node->right) queue[rear++] = node->right;
        }
        res[(*returnSize)++] = max;
    }
    return res;
}
