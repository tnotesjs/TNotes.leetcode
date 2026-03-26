int addMinimum(char* word) {
    int n = strlen(word);
    int groups = 1;
    for (int i = 1; i < n; i++) {
        if (word[i] <= word[i - 1]) groups++;
    }
    return groups * 3 - n;
}
