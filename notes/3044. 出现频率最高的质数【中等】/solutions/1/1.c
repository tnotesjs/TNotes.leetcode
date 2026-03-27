#include <stdlib.h>

int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; (long long)i * i <= n; i++)
        if (n % i == 0) return 0;
    return 1;
}

int mostFrequentPrime(int** mat, int matSize, int* matColSize) {
    int m = matSize, n = matColSize[0];
    int dirs[8][2] = {{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};
    int cap = 10007;
    int* keys = (int*)calloc(cap, sizeof(int));
    int* vals = (int*)calloc(cap, sizeof(int));
    int* used = (int*)calloc(cap, sizeof(int));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            for (int d = 0; d < 8; d++) {
                int r = i + dirs[d][0], c = j + dirs[d][1];
                int num = mat[i][j];
                while (r >= 0 && r < m && c >= 0 && c < n) {
                    num = num * 10 + mat[r][c];
                    if (isPrime(num)) {
                        unsigned h = (unsigned)num % cap;
                        while (used[h] && keys[h] != num) h = (h + 1) % cap;
                        keys[h] = num; vals[h]++; used[h] = 1;
                    }
                    r += dirs[d][0];
                    c += dirs[d][1];
                }
            }
        }
    }
    int ans = -1, maxF = 0;
    for (int i = 0; i < cap; i++) {
        if (used[i] && (vals[i] > maxF || (vals[i] == maxF && keys[i] > ans))) {
            ans = keys[i]; maxF = vals[i];
        }
    }
    free(keys); free(vals); free(used);
    return ans;
}
