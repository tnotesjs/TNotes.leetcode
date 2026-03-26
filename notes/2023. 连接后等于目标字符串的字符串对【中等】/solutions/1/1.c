int numOfPairs(char** nums, int numsSize, char* target) {
    int count = 0, tLen = strlen(target);
    for (int i = 0; i < numsSize; i++) {
        for (int j = 0; j < numsSize; j++) {
            if (i == j) continue;
            int li = strlen(nums[i]), lj = strlen(nums[j]);
            if (li + lj != tLen) continue;
            if (strncmp(nums[i], target, li) == 0 && strcmp(nums[j], target + li) == 0)
                count++;
        }
    }
    return count;
}
