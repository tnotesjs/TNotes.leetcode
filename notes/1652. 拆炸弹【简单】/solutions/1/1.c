/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* decrypt(int* code, int codeSize, int k, int* returnSize) {
    int n = codeSize;
    *returnSize = n;
    int* res = (int*)calloc(n, sizeof(int));
    if (k == 0) return res;

    // arr = code + code (模拟循环数组)
    int arr[200];
    for (int i = 0; i < n; i++) arr[i] = arr[i + n] = code[i];

    if (k > 0) {
        int sum = 0;
        for (int i = 1; i <= k; i++) sum += arr[i];
        res[0] = sum;
        for (int i = 1; i < n; i++) {
            sum += arr[i + k] - arr[i];
            res[i] = sum;
        }
    } else {
        int w = -k;
        int sum = 0;
        int cur = n;
        for (int i = cur - w; i < cur; i++) sum += arr[i];
        res[0] = sum;
        for (int i = 1; i < n; i++) {
            sum += arr[cur] - arr[cur - w];
            cur++;
            res[i] = sum;
        }
    }

    return res;
}
