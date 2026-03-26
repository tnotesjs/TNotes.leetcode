/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findArray(int* pref, int prefSize, int* returnSize) {
    *returnSize = prefSize;
    int *arr = (int *)malloc(prefSize * sizeof(int));
    arr[0] = pref[0];
    for (int i = 1; i < prefSize; i++) {
        arr[i] = pref[i] ^ pref[i - 1];
    }
    return arr;
}
