/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* replaceValueInTree(struct TreeNode* root) {
    root->val = 0;
    struct TreeNode** queue = (struct TreeNode**)malloc(100001 * sizeof(struct TreeNode*));
    int front = 0, back = 0;
    queue[back++] = root;
    while (front < back) {
        int levelSum = 0;
        int start = front, end = back;
        for (int i = start; i < end; i++) {
            if (queue[i]->left) levelSum += queue[i]->left->val;
            if (queue[i]->right) levelSum += queue[i]->right->val;
        }
        for (int i = start; i < end; i++) {
            int siblingSum = 0;
            if (queue[i]->left) siblingSum += queue[i]->left->val;
            if (queue[i]->right) siblingSum += queue[i]->right->val;
            if (queue[i]->left) {
                queue[i]->left->val = levelSum - siblingSum;
                queue[back++] = queue[i]->left;
            }
            if (queue[i]->right) {
                queue[i]->right->val = levelSum - siblingSum;
                queue[back++] = queue[i]->right;
            }
        }
        front = end;
    }
    free(queue);
    return root;
}
