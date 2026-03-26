struct TreeNode* reverseOddLevels(struct TreeNode* root) {
    struct TreeNode** queue = (struct TreeNode**)malloc(100000 * sizeof(struct TreeNode*));
    int front = 0, back = 0;
    queue[back++] = root;
    int level = 0;
    while (front < back) {
        int size = back - front;
        if (level % 2 == 1) {
            int l = front, r = back - 1;
            while (l < r) {
                int tmp = queue[l]->val;
                queue[l]->val = queue[r]->val;
                queue[r]->val = tmp;
                l++; r--;
            }
        }
        for (int i = 0; i < size; i++) {
            struct TreeNode* node = queue[front++];
            if (node->left) queue[back++] = node->left;
            if (node->right) queue[back++] = node->right;
        }
        level++;
    }
    free(queue);
    return root;
}
