int edgeScore(int* edges, int edgesSize) {
    int n = edgesSize;
    long long* score = (long long*)calloc(n, sizeof(long long));
    for (int i = 0; i < n; i++) {
        score[edges[i]] += i;
    }
    long long maxScore = -1;
    int ans = 0;
    for (int i = 0; i < n; i++) {
        if (score[i] > maxScore) {
            maxScore = score[i];
            ans = i;
        }
    }
    free(score);
    return ans;
}
