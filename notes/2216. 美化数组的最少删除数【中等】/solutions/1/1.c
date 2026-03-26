int minDeletion(int* nums, int numsSize) {
    int deletions = 0;
    for (int i = 0; i < numsSize - 1; i++) {
        if ((i - deletions) % 2 == 0 && nums[i] == nums[i + 1]) {
            deletions++;
        }
    }
    if ((numsSize - deletions) % 2 != 0) deletions++;
    return deletions;
}
