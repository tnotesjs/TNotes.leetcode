char** wordSubsets(char** words1, int words1Size, char** words2, int words2Size, int* returnSize) {
    int maxFreq[26] = {0};

    for (int i = 0; i < words2Size; i++) {
        int freq[26] = {0};
        for (int j = 0; words2[i][j]; j++) {
            freq[words2[i][j] - 'a']++;
        }
        for (int j = 0; j < 26; j++) {
            if (freq[j] > maxFreq[j]) maxFreq[j] = freq[j];
        }
    }

    char** res = malloc(words1Size * sizeof(char*));
    *returnSize = 0;

    for (int i = 0; i < words1Size; i++) {
        int freq[26] = {0};
        for (int j = 0; words1[i][j]; j++) {
            freq[words1[i][j] - 'a']++;
        }
        int valid = 1;
        for (int j = 0; j < 26; j++) {
            if (freq[j] < maxFreq[j]) { valid = 0; break; }
        }
        if (valid) res[(*returnSize)++] = words1[i];
    }

    return res;
}
