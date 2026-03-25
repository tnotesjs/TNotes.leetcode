int cmpPair(const void* a, const void* b) { return ((int*)a)[0] - ((int*)b)[0]; }
int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int maxProfitAssignment(int* difficulty, int difficultySize, int* profit, int profitSize, int* worker, int workerSize) {
    int n = difficultySize;
    int (*jobs)[2] = malloc(sizeof(int[2]) * n);
    for (int i = 0; i < n; i++) { jobs[i][0] = difficulty[i]; jobs[i][1] = profit[i]; }
    qsort(jobs, n, sizeof(int[2]), cmpPair);
    qsort(worker, workerSize, sizeof(int), cmpInt);
    int res = 0, best = 0, j = 0;
    for (int i = 0; i < workerSize; i++) {
        while (j < n && jobs[j][0] <= worker[i]) {
            if (jobs[j][1] > best) best = jobs[j][1];
            j++;
        }
        res += best;
    }
    free(jobs);
    return res;
}
