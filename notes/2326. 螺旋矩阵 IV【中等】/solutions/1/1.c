/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** spiralMatrix(int m, int n, struct ListNode* head, int* returnSize, int** returnColumnSizes) {
    int** matrix = (int**)malloc(m * sizeof(int*));
    *returnSize = m;
    *returnColumnSizes = (int*)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++) {
        matrix[i] = (int*)malloc(n * sizeof(int));
        (*returnColumnSizes)[i] = n;
        for (int j = 0; j < n; j++) matrix[i][j] = -1;
    }
    int dirs[4][2] = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    int r = 0, c = 0, d = 0;
    struct ListNode* node = head;
    while (node) {
        matrix[r][c] = node->val;
        node = node->next;
        int nr = r + dirs[d][0], nc = c + dirs[d][1];
        if (nr < 0 || nr >= m || nc < 0 || nc >= n || matrix[nr][nc] != -1) {
            d = (d + 1) % 4;
        }
        r += dirs[d][0];
        c += dirs[d][1];
    }
    return matrix;
}
