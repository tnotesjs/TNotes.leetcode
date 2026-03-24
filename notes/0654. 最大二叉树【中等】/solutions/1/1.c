struct TreeNode* build(int* nums, int l, int r) {
    if (l > r) return NULL;
    int maxIdx = l;
    for (int i = l + 1; i <= r; i++) {
        if (nums[i] > nums[maxIdx]) maxIdx = i;
    }
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = nums[maxIdx];
    node->left = build(nums, l, maxIdx - 1);
    node->right = build(nums, maxIdx + 1, r);
    return node;
}

struct TreeNode* constructMaximumBinaryTree(int* nums, int numsSize) {
    return build(nums, 0, numsSize - 1);
}
