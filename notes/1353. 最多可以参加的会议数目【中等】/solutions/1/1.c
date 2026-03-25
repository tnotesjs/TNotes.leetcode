int cmp(const void* a, const void* b) {
    return (*(int**)a)[0] - (*(int**)b)[0];
}

// Min heap operations
void heapPush(int* h, int* size, int val) {
    h[(*size)++] = val;
    int i = *size - 1;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (h[p] <= h[i]) break;
        int tmp = h[p]; h[p] = h[i]; h[i] = tmp;
        i = p;
    }
}

int heapPop(int* h, int* size) {
    int val = h[0];
    h[0] = h[--(*size)];
    int i = 0;
    while (1) {
        int s = i, l = 2*i+1, r = 2*i+2;
        if (l < *size && h[l] < h[s]) s = l;
        if (r < *size && h[r] < h[s]) s = r;
        if (s == i) break;
        int tmp = h[i]; h[i] = h[s]; h[s] = tmp;
        i = s;
    }
    return val;
}

int maxEvents(int** events, int eventsSize, int* eventsColSize) {
    qsort(events, eventsSize, sizeof(int*), cmp);
    int* heap = malloc(sizeof(int) * eventsSize);
    int hSize = 0, i = 0, ans = 0, day = 1;
    while (i < eventsSize || hSize > 0) {
        if (hSize == 0 && i < eventsSize) day = events[i][0];
        while (i < eventsSize && events[i][0] == day)
            heapPush(heap, &hSize, events[i++][1]);
        while (hSize > 0 && heap[0] < day)
            heapPop(heap, &hSize);
        if (hSize > 0) { heapPop(heap, &hSize); ans++; }
        day++;
    }
    free(heap);
    return ans;
}
