/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* grayCode(int n, int* returnSize) {
    *returnSize = 1 << n;
    int* result = (int*)malloc(sizeof(int) * (*returnSize));
    for (int i = 0; i < *returnSize; i++)
        result[i] = i ^ (i >> 1); // 格雷编码公式
    return result;
}
