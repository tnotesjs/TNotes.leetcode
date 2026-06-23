/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* modes = NULL;
int modesSize = 0;
int maxCount = 0;
int currentCount = 0;
int prevVal = 0;
bool hasPrev = false;

void inorder(struct TreeNode* node) {
    if (!node)
        return;

    inorder(node->left);

    if (!hasPrev || node->val != prevVal) {
        currentCount = 1;
    } else {
        currentCount++;
    }
    hasPrev = true;

    if (currentCount > maxCount) {
        maxCount = currentCount;
        modesSize = 0;
        modes[modesSize++] = node->val;
    } else if (currentCount == maxCount) {
        modes[modesSize++] = node->val;
    }

    prevVal = node->val;
    inorder(node->right);
}

int* findMode(struct TreeNode* root, int* returnSize) {
    modes = (int*)malloc(sizeof(int) * 10000);
    modesSize = 0;
    maxCount = 0;
    currentCount = 0;
    hasPrev = false;

    inorder(root);
    *returnSize = modesSize;
    return modes;
}
