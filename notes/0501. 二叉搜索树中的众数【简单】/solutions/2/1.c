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

void handleValue(int val) {
    if (!hasPrev || val != prevVal) {
        currentCount = 1;
    } else {
        currentCount++;
    }
    hasPrev = true;

    if (currentCount > maxCount) {
        maxCount = currentCount;
        modesSize = 0;
        modes[modesSize++] = val;
    } else if (currentCount == maxCount) {
        modes[modesSize++] = val;
    }
    prevVal = val;
}

int* findMode(struct TreeNode* root, int* returnSize) {
    modes = (int*)malloc(sizeof(int) * 10000);
    modesSize = 0;
    maxCount = 0;
    currentCount = 0;
    hasPrev = false;

    struct TreeNode* current = root;
    while (current) {
        if (!current->left) {
            handleValue(current->val);
            current = current->right;
        } else {
            struct TreeNode* predecessor = current->left;
            while (predecessor->right && predecessor->right != current)
                predecessor = predecessor->right;

            if (!predecessor->right) {
                predecessor->right = current;
                current = current->left;
            } else {
                predecessor->right = NULL;
                handleValue(current->val);
                current = current->right;
            }
        }
    }

    *returnSize = modesSize;
    return modes;
}
