#include <stdlib.h>

// 最小堆实现
typedef struct {
    long long *data;
    int size, cap;
} Heap;

void swap(long long *a, long long *b) { long long t = *a; *a = *b; *b = t; }

void push(Heap *h, long long val) {
    if (h->size == h->cap) { h->cap *= 2; h->data = realloc(h->data, h->cap * sizeof(long long)); }
    h->data[h->size] = val;
    int i = h->size++;
    while (i > 0 && h->data[(i-1)/2] > h->data[i]) { swap(&h->data[(i-1)/2], &h->data[i]); i = (i-1)/2; }
}

long long pop(Heap *h) {
    long long val = h->data[0];
    h->data[0] = h->data[--h->size];
    int i = 0;
    while (1) {
        int l = 2*i+1, r = 2*i+2, m = i;
        if (l < h->size && h->data[l] < h->data[m]) m = l;
        if (r < h->size && h->data[r] < h->data[m]) m = r;
        if (m == i) break;
        swap(&h->data[i], &h->data[m]);
        i = m;
    }
    return val;
}

int minOperations(int* nums, int numsSize, int k) {
    Heap h = {malloc(numsSize * 2 * sizeof(long long)), 0, numsSize * 2};
    for (int i = 0; i < numsSize; i++) push(&h, nums[i]);
    int ops = 0;
    while (h.size >= 2 && h.data[0] < k) {
        long long x = pop(&h), y = pop(&h);
        long long mn = x < y ? x : y, mx = x > y ? x : y;
        push(&h, mn * 2 + mx);
        ops++;
    }
    free(h.data);
    return ops;
}
