/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int cmp2471(const void *a, const void *b) {
    return ((int *)a)[0] - ((int *)b)[0];
}

int minSwaps2471(int *arr, int n) {
    int (*indexed)[2] = malloc(n * sizeof(int[2]));
    for (int i = 0; i < n; i++) { indexed[i][0] = arr[i]; indexed[i][1] = i; }
    qsort(indexed, n, sizeof(int[2]), cmp2471);
    int *visited = (int *)calloc(n, sizeof(int));
    int swaps = 0;
    for (int i = 0; i < n; i++) {
        if (visited[i] || indexed[i][1] == i) continue;
        int cycleLen = 0, j = i;
        while (!visited[j]) {
            visited[j] = 1;
            j = indexed[j][1];
            cycleLen++;
        }
        swaps += cycleLen - 1;
    }
    free(indexed); free(visited);
    return swaps;
}

int minimumOperations(struct TreeNode* root) {
    if (!root) return 0;
    struct TreeNode **queue = (struct TreeNode **)malloc(100001 * sizeof(struct TreeNode *));
    int front = 0, back = 0;
    queue[back++] = root;
    int ans = 0;
    while (front < back) {
        int size = back - front;
        int *level = (int *)malloc(size * sizeof(int));
        for (int i = 0; i < size; i++) {
            struct TreeNode *node = queue[front++];
            level[i] = node->val;
            if (node->left) queue[back++] = node->left;
            if (node->right) queue[back++] = node->right;
        }
        ans += minSwaps2471(level, size);
        free(level);
    }
    free(queue);
    return ans;
}
