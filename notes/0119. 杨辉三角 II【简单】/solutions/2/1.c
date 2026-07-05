/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* getRow(int rowIndex, int* returnSize) {
    int* row = (int*)malloc(sizeof(int) * (rowIndex + 1));
    *returnSize = rowIndex + 1;

    for (int i = 0; i <= rowIndex; i++) {
        row[i] = 1;
        for (int j = i - 1; j > 0; j--) {
            row[j] = row[j - 1] + row[j];
        }
    }

    return row;
}
