typedef struct { int sum; int i; int j; } HeapNode;

void heapSwap(HeapNode* a, HeapNode* b) { HeapNode t = *a; *a = *b; *b = t; }

void heapPush(HeapNode* heap, int* size, HeapNode node) {
    heap[(*size)++] = node;
    int i = *size - 1;
    while (i > 0 && heap[(i-1)/2].sum > heap[i].sum) {
        heapSwap(&heap[(i-1)/2], &heap[i]);
        i = (i-1)/2;
    }
}

HeapNode heapPop(HeapNode* heap, int* size) {
    HeapNode top = heap[0];
    heap[0] = heap[--(*size)];
    int i = 0;
    while (1) {
        int min = i, l = 2*i+1, r = 2*i+2;
        if (l < *size && heap[l].sum < heap[min].sum) min = l;
        if (r < *size && heap[r].sum < heap[min].sum) min = r;
        if (min == i) break;
        heapSwap(&heap[i], &heap[min]);
        i = min;
    }
    return top;
}

int** kSmallestPairs(int* nums1, int nums1Size, int* nums2, int nums2Size, int k, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    int** res = (int**)malloc(sizeof(int*) * k);
    *returnColumnSizes = (int*)malloc(sizeof(int) * k);
    if (nums1Size == 0 || nums2Size == 0) return res;
    int heapSize = 0;
    int initSize = nums1Size < k ? nums1Size : k;
    HeapNode* heap = (HeapNode*)malloc(sizeof(HeapNode) * (initSize + k));
    for (int i = 0; i < initSize; i++) {
        heapPush(heap, &heapSize, (HeapNode){nums1[i] + nums2[0], i, 0});
    }
    while (heapSize > 0 && *returnSize < k) {
        HeapNode node = heapPop(heap, &heapSize);
        res[*returnSize] = (int*)malloc(sizeof(int) * 2);
        res[*returnSize][0] = nums1[node.i];
        res[*returnSize][1] = nums2[node.j];
        (*returnColumnSizes)[*returnSize] = 2;
        (*returnSize)++;
        if (node.j + 1 < nums2Size)
            heapPush(heap, &heapSize, (HeapNode){nums1[node.i] + nums2[node.j+1], node.i, node.j+1});
    }
    free(heap);
    return res;
}
