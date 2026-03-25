int maxLevelSum(struct TreeNode* root) {
    struct TreeNode* queue[10001];
    int front = 0, back = 0;
    queue[back++] = root;
    int maxSum = INT_MIN, ans = 1, level = 1;
    while (front < back) {
        int size = back - front;
        int sum = 0;
        for (int i = 0; i < size; i++) {
            struct TreeNode* node = queue[front++];
            sum += node->val;
            if (node->left) queue[back++] = node->left;
            if (node->right) queue[back++] = node->right;
        }
        if (sum > maxSum) {
            maxSum = sum;
            ans = level;
        }
        level++;
    }
    return ans;
}
