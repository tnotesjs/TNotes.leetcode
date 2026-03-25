double* sampleStats(int* count, int countSize, int* returnSize) {
    double* res = malloc(5 * sizeof(double));
    *returnSize = 5;
    int minVal = -1, maxVal = -1, mode = 0;
    long long total = 0, sum = 0;
    int maxFreq = 0;
    for (int i = 0; i < 256; i++) {
        if (count[i] == 0) continue;
        if (minVal == -1) minVal = i;
        maxVal = i;
        total += count[i];
        sum += (long long)i * count[i];
        if (count[i] > maxFreq) { maxFreq = count[i]; mode = i; }
    }
    res[0] = minVal; res[1] = maxVal;
    res[2] = (double)sum / total;
    res[4] = mode;
    long long half1 = (total - 1) / 2, half2 = total / 2;
    int m1 = -1, m2 = -1;
    long long acc = 0;
    for (int i = 0; i < 256; i++) {
        acc += count[i];
        if (m1 == -1 && acc > half1) m1 = i;
        if (m2 == -1 && acc > half2) m2 = i;
    }
    res[3] = (m1 + m2) / 2.0;
    return res;
}
