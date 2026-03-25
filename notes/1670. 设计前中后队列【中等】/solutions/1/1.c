typedef struct {
    int* arr;
    int size;
    int cap;
} FrontMiddleBackQueue;

FrontMiddleBackQueue* frontMiddleBackQueueCreate() {
    FrontMiddleBackQueue* q = (FrontMiddleBackQueue*)malloc(sizeof(FrontMiddleBackQueue));
    q->cap = 1001;
    q->arr = (int*)malloc(q->cap * sizeof(int));
    q->size = 0;
    return q;
}

void frontMiddleBackQueuePushFront(FrontMiddleBackQueue* q, int val) {
    for (int i = q->size; i > 0; i--) q->arr[i] = q->arr[i-1];
    q->arr[0] = val; q->size++;
}

void frontMiddleBackQueuePushMiddle(FrontMiddleBackQueue* q, int val) {
    int mid = q->size / 2;
    for (int i = q->size; i > mid; i--) q->arr[i] = q->arr[i-1];
    q->arr[mid] = val; q->size++;
}

void frontMiddleBackQueuePushBack(FrontMiddleBackQueue* q, int val) {
    q->arr[q->size++] = val;
}

int frontMiddleBackQueuePopFront(FrontMiddleBackQueue* q) {
    if (!q->size) return -1;
    int val = q->arr[0];
    for (int i = 0; i < q->size - 1; i++) q->arr[i] = q->arr[i+1];
    q->size--; return val;
}

int frontMiddleBackQueuePopMiddle(FrontMiddleBackQueue* q) {
    if (!q->size) return -1;
    int mid = (q->size - 1) / 2;
    int val = q->arr[mid];
    for (int i = mid; i < q->size - 1; i++) q->arr[i] = q->arr[i+1];
    q->size--; return val;
}

int frontMiddleBackQueuePopBack(FrontMiddleBackQueue* q) {
    if (!q->size) return -1;
    return q->arr[--q->size];
}

void frontMiddleBackQueueFree(FrontMiddleBackQueue* q) {
    free(q->arr); free(q);
}
