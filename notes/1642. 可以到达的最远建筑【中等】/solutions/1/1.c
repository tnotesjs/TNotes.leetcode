#include <stdlib.h>

static void heapPush(int* h, int* sz, int v) {
    h[(*sz)++] = v;
    int i = *sz - 1;
    while (i > 0) {
        int p = (i-1)/2;
        if (h[p] <= h[i]) break;
        int t = h[p]; h[p] = h[i]; h[i] = t;
        i = p;
    }
}

static int heapPop(int* h, int* sz) {
    int top = h[0];
    h[0] = h[--(*sz)];
    int i = 0;
    while (1) {
        int s = i, l = 2*i+1, r = 2*i+2;
        if (l < *sz && h[l] < h[s]) s = l;
        if (r < *sz && h[r] < h[s]) s = r;
        if (s == i) break;
        int t = h[s]; h[s] = h[i]; h[i] = t;
        i = s;
    }
    return top;
}

int furthestBuilding(int* heights, int heightsSize, int bricks, int ladders) {
    int* heap = (int*)malloc(heightsSize * sizeof(int));
    int sz = 0;
    for (int i = 0; i < heightsSize - 1; i++) {
        int diff = heights[i+1] - heights[i];
        if (diff <= 0) continue;
        heapPush(heap, &sz, diff);
        if (sz > ladders) bricks -= heapPop(heap, &sz);
        if (bricks < 0) { free(heap); return i; }
    }
    free(heap);
    return heightsSize - 1;
}
