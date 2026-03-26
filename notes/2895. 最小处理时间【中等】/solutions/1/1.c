int cmpAsc(const void *a, const void *b) {
    int x = *(int *)a, y = *(int *)b;
    return (x > y) - (x < y);
}

int cmpDesc(const void *a, const void *b) {
    int x = *(int *)a, y = *(int *)b;
    return (y > x) - (y < x);
}

int minProcessingTime(int* processorTime, int processorTimeSize, int* tasks, int tasksSize) {
    qsort(processorTime, processorTimeSize, sizeof(int), cmpAsc);
    qsort(tasks, tasksSize, sizeof(int), cmpDesc);
    int ans = 0;
    for (int i = 0; i < processorTimeSize; i++) {
        int t = processorTime[i] + tasks[i * 4];
        if (t > ans) ans = t;
    }
    return ans;
}
