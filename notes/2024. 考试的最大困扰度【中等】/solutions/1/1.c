int solve2024(char* s, int n, int k, char ch) {
    int left = 0, flips = 0, res = 0;
    for (int right = 0; right < n; right++) {
        if (s[right] != ch) flips++;
        while (flips > k) {
            if (s[left] != ch) flips--;
            left++;
        }
        int len = right - left + 1;
        if (len > res) res = len;
    }
    return res;
}

int maxConsecutiveAnswers(char* answerKey, int k) {
    int n = strlen(answerKey);
    int a = solve2024(answerKey, n, k, 'T');
    int b = solve2024(answerKey, n, k, 'F');
    return a > b ? a : b;
}
