/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int cmpDesc(const void* a, const void* b) {
    long long x = *(long long*)a, y = *(long long*)b;
    return x > y ? -1 : x < y ? 1 : 0;
}

long long kthLargestLevelSum(struct TreeNode* root, int k) {
    long long sums[100001];
    int cnt = 0;
    struct TreeNode* queue[100001];
    int front = 0, back = 0;
    queue[back++] = root;
    while (front < back) {
        int size = back - front;
        long long sum = 0;
        for (int i = 0; i < size; i++) {
            struct TreeNode* node = queue[front++];
            sum += node->val;
            if (node->left) queue[back++] = node->left;
            if (node->right) queue[back++] = node->right;
        }
        sums[cnt++] = sum;
    }
    if (cnt < k) return -1;
    qsort(sums, cnt, sizeof(long long), cmpDesc);
    return sums[k - 1];
}
