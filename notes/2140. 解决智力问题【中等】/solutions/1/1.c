long long mostPoints(int** questions, int questionsSize, int* questionsColSize) {
    long long* dp = (long long*)calloc(questionsSize + 1, sizeof(long long));
    for (int i = questionsSize - 1; i >= 0; i--) {
        int points = questions[i][0];
        int brainpower = questions[i][1];
        long long next = i + brainpower + 1;
        long long take = points + (next < questionsSize ? dp[next] : 0);
        dp[i] = dp[i + 1] > take ? dp[i + 1] : take;
    }
    long long res = dp[0];
    free(dp);
    return res;
}
