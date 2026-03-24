/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {
    *returnSize = 2;
    int* res = (int*)malloc(sizeof(int) * 2);
    int left = 0, right = numbersSize - 1;
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) {
            res[0] = left + 1;
            res[1] = right + 1;
            return res;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return res;
}
