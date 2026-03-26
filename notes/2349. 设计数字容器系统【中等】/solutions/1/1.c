#define MAX_NC 100001

typedef struct {
    int* heap;
    int size;
    int cap;
} MinHeap;

typedef struct {
    int idxToNum[MAX_NC]; // index -> number, 0 表示未设置
    MinHeap* numHeaps;    // number -> min-heap of indices
    int numHeapsCap;
} NumberContainers;

void heapPush_nc(MinHeap* h, int val) {
    if (h->size == h->cap) {
        h->cap = h->cap ? h->cap * 2 : 4;
        h->heap = (int*)realloc(h->heap, h->cap * sizeof(int));
    }
    h->heap[h->size] = val;
    int i = h->size++;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (h->heap[p] <= h->heap[i]) break;
        int t = h->heap[p]; h->heap[p] = h->heap[i]; h->heap[i] = t;
        i = p;
    }
}

void heapPop_nc(MinHeap* h) {
    h->heap[0] = h->heap[--h->size];
    int i = 0;
    while (1) {
        int s = i, l = 2 * i + 1, r = 2 * i + 2;
        if (l < h->size && h->heap[l] < h->heap[s]) s = l;
        if (r < h->size && h->heap[r] < h->heap[s]) s = r;
        if (s == i) break;
        int t = h->heap[s]; h->heap[s] = h->heap[i]; h->heap[i] = t;
        i = s;
    }
}

NumberContainers* numberContainersCreate() {
    NumberContainers* obj = (NumberContainers*)calloc(1, sizeof(NumberContainers));
    obj->numHeapsCap = MAX_NC;
    obj->numHeaps = (MinHeap*)calloc(MAX_NC, sizeof(MinHeap));
    return obj;
}

void numberContainersChange(NumberContainers* obj, int index, int number) {
    obj->idxToNum[index] = number;
    heapPush_nc(&obj->numHeaps[number], index);
}

int numberContainersFind(NumberContainers* obj, int number) {
    if (number >= obj->numHeapsCap) return -1;
    MinHeap* h = &obj->numHeaps[number];
    while (h->size > 0 && obj->idxToNum[h->heap[0]] != number) {
        heapPop_nc(h);
    }
    return h->size > 0 ? h->heap[0] : -1;
}

void numberContainersFree(NumberContainers* obj) {
    for (int i = 0; i < obj->numHeapsCap; i++) {
        free(obj->numHeaps[i].heap);
    }
    free(obj->numHeaps);
    free(obj);
}
