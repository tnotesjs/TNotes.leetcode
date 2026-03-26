int* divisibilityArray(char* word, int m, int* returnSize) {
    int n = strlen(word);
    *returnSize = n;
    int* div = (int*)malloc(n * sizeof(int));
    long long rem = 0;
    for (int i = 0; i < n; i++) {
        rem = (rem * 10 + (word[i] - '0')) % m;
        div[i] = rem == 0 ? 1 : 0;
    }
    return div;
}
