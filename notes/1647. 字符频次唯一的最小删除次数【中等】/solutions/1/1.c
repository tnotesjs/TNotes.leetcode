int cmp1647(const void* a, const void* b) { return *(int*)b - *(int*)a; }

int minDeletions(char* s) {
    int freq[26] = {0};
    for (int i = 0; s[i]; i++) freq[s[i] - 'a']++;
    qsort(freq, 26, sizeof(int), cmp1647);
    int res = 0;
    for (int i = 1; i < 26; i++) {
        if (freq[i] == 0) break;
        if (freq[i] >= freq[i-1]) {
            int target = freq[i-1] - 1;
            if (target < 0) target = 0;
            res += freq[i] - target;
            freq[i] = target;
        }
    }
    return res;
}
