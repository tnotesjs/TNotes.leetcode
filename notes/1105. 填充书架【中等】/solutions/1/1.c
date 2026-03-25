int minHeightShelves(int** books, int booksSize, int* booksColSize, int shelfWidth) {
    int* dp = calloc(booksSize + 1, sizeof(int));
    for (int i = 1; i <= booksSize; i++) dp[i] = INT_MAX;
    for (int i = 1; i <= booksSize; i++) {
        int width = 0, height = 0;
        for (int j = i; j >= 1; j--) {
            width += books[j - 1][0];
            if (width > shelfWidth) break;
            if (books[j - 1][1] > height) height = books[j - 1][1];
            if (dp[j - 1] + height < dp[i]) dp[i] = dp[j - 1] + height;
        }
    }
    int res = dp[booksSize];
    free(dp);
    return res;
}
