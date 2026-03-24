bool canJump(int* nums, int numsSize) {
    int maxReach = 0;
    for (int i = 0; i < numsSize; i++) {
        if (i > maxReach) return false; // 当前位置不可达
        int reach = i + nums[i];
        if (reach > maxReach) maxReach = reach;
        if (maxReach >= numsSize - 1) return true;
    }
    return true;
}
