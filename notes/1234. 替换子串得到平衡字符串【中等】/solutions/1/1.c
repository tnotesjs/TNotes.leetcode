int balancedString(char* s) {
    int n = strlen(s);
    int target = n / 4;
    int cnt[128] = {0};
    for (int i = 0; i < n; i++) cnt[(int)s[i]]++;
    if (cnt['Q'] == target && cnt['W'] == target && cnt['E'] == target && cnt['R'] == target) return 0;
    int ans = n, left = 0;
    for (int right = 0; right < n; right++) {
        cnt[(int)s[right]]--;
        while (cnt['Q'] <= target && cnt['W'] <= target && cnt['E'] <= target && cnt['R'] <= target) {
            int len = right - left + 1;
            if (len < ans) ans = len;
            cnt[(int)s[left]]++;
            left++;
        }
    }
    return ans;
}
