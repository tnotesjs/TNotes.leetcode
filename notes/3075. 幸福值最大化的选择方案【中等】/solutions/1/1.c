#include <stdlib.h>

int cmp(const void *a, const void *b) {
    return *(int*)b - *(int*)a;
}

long long maximumHappinessSum(int* happiness, int happinessSize, int k) {
    qsort(happiness, happinessSize, sizeof(int), cmp);
    long long sum = 0;
    for (int i = 0; i < k; i++) {
        long long val = happiness[i] - i;
        if (val > 0) sum += val;
    }
    return sum;
}
