int* findAnagrams(char* s, char* p, int* returnSize) {
    int sLen = strlen(s), pLen = strlen(p);
    *returnSize = 0;
    int* res = (int*)malloc(sizeof(int) * sLen);
    if (sLen < pLen) return res;
    int count[26] = {0}, window[26] = {0};
    for (int i = 0; i < pLen; i++) count[p[i] - 'a']++;
    for (int i = 0; i < sLen; i++) {
        window[s[i] - 'a']++;
        if (i >= pLen) window[s[i - pLen] - 'a']--;
        if (i >= pLen - 1 && memcmp(count, window, sizeof(count)) == 0)
            res[(*returnSize)++] = i - pLen + 1;
    }
    return res;
}
