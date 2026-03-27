int cmp(const void* a, const void* b) {
    return *(int*)b - *(int*)a;
}

int minimumPushes(char* word) {
    int freq[26] = {0};
    for (int i = 0; word[i]; i++) {
        freq[word[i] - 'a']++;
    }
    qsort(freq, 26, sizeof(int), cmp);
    int res = 0;
    for (int i = 0; i < 26; i++) {
        if (freq[i] == 0) break;
        res += freq[i] * (i / 8 + 1);
    }
    return res;
}
