long long getMaxFunctionValue(int* receiver, int receiverSize, long long k) {
    int n = receiverSize, LOG = 35;
    int** jump = (int**)malloc(LOG * sizeof(int*));
    long long** sm = (long long**)malloc(LOG * sizeof(long long*));
    for (int j = 0; j < LOG; j++) {
        jump[j] = (int*)malloc(n * sizeof(int));
        sm[j] = (long long*)malloc(n * sizeof(long long));
    }
    for (int i = 0; i < n; i++) {
        jump[0][i] = receiver[i];
        sm[0][i] = receiver[i];
    }
    for (int j = 1; j < LOG; j++)
        for (int i = 0; i < n; i++) {
            jump[j][i] = jump[j - 1][jump[j - 1][i]];
            sm[j][i] = sm[j - 1][i] + sm[j - 1][jump[j - 1][i]];
        }
    long long ans = 0;
    for (int i = 0; i < n; i++) {
        int cur = i;
        long long total = i;
        long long kk = k;
        for (int j = 0; j < LOG && kk > 0; j++) {
            if (kk & 1) { total += sm[j][cur]; cur = jump[j][cur]; }
            kk >>= 1;
        }
        if (total > ans) ans = total;
    }
    for (int j = 0; j < LOG; j++) { free(jump[j]); free(sm[j]); }
    free(jump); free(sm);
    return ans;
}
