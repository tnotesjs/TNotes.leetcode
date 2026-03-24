int maxProduct(char** words, int wordsSize) {
    int* masks = (int*)calloc(wordsSize, sizeof(int));
    for (int i = 0; i < wordsSize; i++) {
        for (int j = 0; words[i][j]; j++)
            masks[i] |= 1 << (words[i][j] - 'a');
    }
    int res = 0;
    for (int i = 0; i < wordsSize; i++) {
        int li = strlen(words[i]);
        for (int j = i + 1; j < wordsSize; j++) {
            if ((masks[i] & masks[j]) == 0) {
                int val = li * (int)strlen(words[j]);
                if (val > res) res = val;
            }
        }
    }
    free(masks);
    return res;
}
