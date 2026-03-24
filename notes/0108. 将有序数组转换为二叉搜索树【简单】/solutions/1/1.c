/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* build(int* nums, int left, int right) {
    if (left > right) return NULL;
    int mid = left + (right - left) / 2;
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = nums[mid];
    node->left = build(nums, left, mid - 1);
    node->right = build(nums, mid + 1, right);
    return node;
}

struct TreeNode* sortedArrayToBST(int* nums, int numsSize) {
    return build(nums, 0, numsSize - 1);
}
