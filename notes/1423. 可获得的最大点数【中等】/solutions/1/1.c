int maxScore(int* cardPoints, int cardPointsSize, int k) {
    int n = cardPointsSize;
    int sum = 0;
    for (int i = 0; i < k; i++) sum += cardPoints[i];
    int maxSum = sum;
    for (int i = 0; i < k; i++) {
        sum -= cardPoints[k - 1 - i];
        sum += cardPoints[n - 1 - i];
        if (sum > maxSum) maxSum = sum;
    }
    return maxSum;
}
