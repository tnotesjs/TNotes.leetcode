int* closestDivisors(int num, int* returnSize) {
    *returnSize = 2;
    int* res = malloc(sizeof(int) * 2);
    int bestDiff = INT_MAX;
    for (int t = num + 1; t <= num + 2; t++) {
        for (int i = (int)sqrt(t); i >= 1; i--) {
            if (t % i == 0) {
                int diff = t / i - i;
                if (diff < bestDiff) {
                    bestDiff = diff;
                    res[0] = i;
                    res[1] = t / i;
                }
                break;
            }
        }
    }
    return res;
}
