int next(int* nums, int n, int i) {
    return ((i + nums[i]) % n + n) % n;
}

bool circularArrayLoop(int* nums, int numsSize) {
    int n = numsSize;
    for (int i = 0; i < n; i++) {
        if (nums[i] == 0) continue;
        int slow = i, fast = i;
        while (nums[next(nums, n, fast)] * nums[i] > 0 &&
               nums[next(nums, n, next(nums, n, fast))] * nums[i] > 0) {
            slow = next(nums, n, slow);
            fast = next(nums, n, next(nums, n, fast));
            if (slow == fast) {
                if (slow == next(nums, n, slow)) break;
                return true;
            }
        }
        // 标记访问过的节点
        int j = i;
        while (nums[j] * nums[i] > 0) {
            int nxt = next(nums, n, j);
            nums[j] = 0;
            j = nxt;
        }
    }
    return false;
}
