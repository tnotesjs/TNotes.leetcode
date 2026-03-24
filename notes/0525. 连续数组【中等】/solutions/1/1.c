#define OFFSET 50001
int findMaxLength(int* nums, int numsSize) {
    int* first = (int*)malloc(sizeof(int) * (2 * numsSize + 2));
    for (int i = 0; i < 2 * numsSize + 2; i++) first[i] = -2;
    first[0 + OFFSET] = -1;
    int count = 0, res = 0;
    for (int i = 0; i < numsSize; i++) {
        count += nums[i] == 1 ? 1 : -1;
        int idx = count + OFFSET;
        if (first[idx] != -2) {
            if (i - first[idx] > res) res = i - first[idx];
        } else {
            first[idx] = i;
        }
    }
    free(first);
    return res;
}
