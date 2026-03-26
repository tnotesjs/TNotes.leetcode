typedef struct {
    int heap[1001];
    int heapSize;
    int inHeap[1001]; // 标记是否在堆中
    int cur;
} SmallestInfiniteSet;

void heapUp2336(SmallestInfiniteSet* obj, int i) {
    while (i > 0) {
        int p = (i - 1) / 2;
        if (obj->heap[p] <= obj->heap[i]) break;
        int t = obj->heap[p]; obj->heap[p] = obj->heap[i]; obj->heap[i] = t;
        i = p;
    }
}

void heapDown2336(SmallestInfiniteSet* obj, int i) {
    while (1) {
        int s = i, l = 2 * i + 1, r = 2 * i + 2;
        if (l < obj->heapSize && obj->heap[l] < obj->heap[s]) s = l;
        if (r < obj->heapSize && obj->heap[r] < obj->heap[s]) s = r;
        if (s == i) break;
        int t = obj->heap[s]; obj->heap[s] = obj->heap[i]; obj->heap[i] = t;
        i = s;
    }
}

SmallestInfiniteSet* smallestInfiniteSetCreate() {
    SmallestInfiniteSet* obj = (SmallestInfiniteSet*)calloc(1, sizeof(SmallestInfiniteSet));
    obj->cur = 1;
    return obj;
}

int smallestInfiniteSetPopSmallest(SmallestInfiniteSet* obj) {
    if (obj->heapSize > 0 && obj->heap[0] < obj->cur) {
        int val = obj->heap[0];
        obj->heap[0] = obj->heap[--obj->heapSize];
        heapDown2336(obj, 0);
        obj->inHeap[val] = 0;
        return val;
    }
    return obj->cur++;
}

void smallestInfiniteSetAddBack(SmallestInfiniteSet* obj, int num) {
    if (num < obj->cur && !obj->inHeap[num]) {
        obj->inHeap[num] = 1;
        obj->heap[obj->heapSize] = num;
        heapUp2336(obj, obj->heapSize);
        obj->heapSize++;
    }
}

void smallestInfiniteSetFree(SmallestInfiniteSet* obj) {
    free(obj);
}
