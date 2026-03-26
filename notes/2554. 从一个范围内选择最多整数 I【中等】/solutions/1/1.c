int cmp2554(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int maxCount(int* banned, int bannedSize, int n, int maxSum) {
    qsort(banned, bannedSize, sizeof(int), cmp2554);
    int cnt = 0, bi = 0;
    long long sum = 0;
    for (int i = 1; i <= n; i++) {
        while (bi < bannedSize && banned[bi] < i) bi++;
        if (bi < bannedSize && banned[bi] == i) { bi++; continue; }
        if (sum + i > maxSum) break;
        sum += i;
        cnt++;
    }
    return cnt;
}
