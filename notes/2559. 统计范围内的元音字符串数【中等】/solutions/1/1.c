int* vowelStrings(char** words, int wordsSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int isVowel(char c) { return c=='a'||c=='e'||c=='i'||c=='o'||c=='u'; }
    int* prefix = (int*)calloc(wordsSize + 1, sizeof(int));
    for (int i = 0; i < wordsSize; i++) {
        int len = strlen(words[i]);
        prefix[i + 1] = prefix[i] + (isVowel(words[i][0]) && isVowel(words[i][len - 1]) ? 1 : 0);
    }
    *returnSize = queriesSize;
    int* ans = (int*)malloc(queriesSize * sizeof(int));
    for (int i = 0; i < queriesSize; i++) {
        ans[i] = prefix[queries[i][1] + 1] - prefix[queries[i][0]];
    }
    free(prefix);
    return ans;
}
