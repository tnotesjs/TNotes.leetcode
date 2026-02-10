/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* replaceElements(int* arr, int arrSize, int* returnSize) {
    *returnSize = arrSize;
    int mx = -1;

    for (int i = arrSize - 1; i >= 0; i--) {
        int cur = arr[i];
        arr[i] = mx;
        if (cur > mx) {
            mx = cur;
        }
    }

    return arr;
}
