int lengthOfLongestSubstring(char* s) {
    int len = strlen(s);
    int seen[128] = {0};
    int ans = 0;
    int left = 0, right = 0;
    while (right < len) {
        if (!seen[(unsigned char)s[right]]) {
            // 窗口扩大
            seen[(unsigned char)s[right]] = 1;
            right++;
            int cur = right - left;
            if (cur > ans)
                ans = cur;
        } else {
            // 窗口缩小
            seen[(unsigned char)s[left]] = 0;
            left++;
        }
    }
    return ans;
}
