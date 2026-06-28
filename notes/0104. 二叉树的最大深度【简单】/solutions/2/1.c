/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int maxDepth(struct TreeNode* root) {
    if (!root)
        return 0;

    struct TreeNode* queue[10000];
    int front = 0, rear = 0;
    queue[rear++] = root;
    int depth = 0;

    while (front < rear) {
        int levelSize = rear - front;
        depth++;

        for (int i = 0; i < levelSize; i++) {
            struct TreeNode* node = queue[front++];
            if (node->left)
                queue[rear++] = node->left;
            if (node->right)
                queue[rear++] = node->right;
        }
    }

    return depth;
}
