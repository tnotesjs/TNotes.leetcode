int cmpToken(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int bagOfTokensScore(int* tokens, int tokensSize, int power) {
    qsort(tokens, tokensSize, sizeof(int), cmpToken);
    int lo = 0, hi = tokensSize - 1;
    int score = 0, maxScore = 0;

    while (lo <= hi) {
        if (power >= tokens[lo]) {
            power -= tokens[lo++];
            score++;
            if (score > maxScore) maxScore = score;
        } else if (score > 0) {
            power += tokens[hi--];
            score--;
        } else {
            break;
        }
    }

    return maxScore;
}
