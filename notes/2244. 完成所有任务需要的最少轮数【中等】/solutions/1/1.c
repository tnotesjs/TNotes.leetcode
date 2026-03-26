int cmp2244(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int minimumRounds(int* tasks, int tasksSize) {
    qsort(tasks, tasksSize, sizeof(int), cmp2244);
    int rounds = 0, i = 0;
    while (i < tasksSize) {
        int j = i;
        while (j < tasksSize && tasks[j] == tasks[i]) j++;
        int cnt = j - i;
        if (cnt == 1) return -1;
        rounds += (cnt + 2) / 3;
        i = j;
    }
    return rounds;
}
