#include <string.h>

int n_;
int* nums_;
int target_;
int memo_[1001][1001];

int dfs(int l, int r) {
    if (l >= r) return 0;
    if (memo_[l][r] != -1) return memo_[l][r];
    int res = 0;
    if (nums_[l] + nums_[l + 1] == target_) {
        int t = 1 + dfs(l + 2, r);
        if (t > res) res = t;
    }
    if (nums_[l] + nums_[r] == target_) {
        int t = 1 + dfs(l + 1, r - 1);
        if (t > res) res = t;
    }
    if (nums_[r - 1] + nums_[r] == target_) {
        int t = 1 + dfs(l, r - 2);
        if (t > res) res = t;
    }
    memo_[l][r] = res;
    return res;
}

int maxOperations(int* nums, int numsSize) {
    n_ = numsSize;
    nums_ = nums;
    int targets[3] = {
        nums[0] + nums[1],
        nums[0] + nums[numsSize - 1],
        nums[numsSize - 2] + nums[numsSize - 1]
    };
    int ans = 0;
    for (int t = 0; t < 3; t++) {
        target_ = targets[t];
        memset(memo_, -1, sizeof(memo_));
        int r = dfs(0, numsSize - 1);
        if (r > ans) ans = r;
    }
    return ans;
}
