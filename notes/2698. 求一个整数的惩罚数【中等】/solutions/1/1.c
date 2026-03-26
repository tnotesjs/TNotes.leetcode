bool canPartition_2698(char* s, int idx, int len, int target) {
    if (idx == len) return target == 0;
    int num = 0;
    for (int i = idx; i < len; i++) {
        num = num * 10 + (s[i] - '0');
        if (num > target) break;
        if (canPartition_2698(s, i + 1, len, target - num)) return true;
    }
    return false;
}

int punishmentNumber(int n) {
    int ans = 0;
    char buf[16];
    for (int i = 1; i <= n; i++) {
        int sq = i * i;
        sprintf(buf, "%d", sq);
        if (canPartition_2698(buf, 0, strlen(buf), i)) {
            ans += sq;
        }
    }
    return ans;
}
