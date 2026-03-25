#include <stdlib.h>

typedef struct { int pt; int idx; } HN1834;

static void heapUp1834(HN1834* h, int i) {
  while (i > 0) {
    int p = (i - 1) / 2;
    if (h[p].pt > h[i].pt || (h[p].pt == h[i].pt && h[p].idx > h[i].idx)) {
      HN1834 t = h[i]; h[i] = h[p]; h[p] = t; i = p;
    } else break;
  }
}

static void heapDown1834(HN1834* h, int n, int i) {
  while (1) {
    int m = i, l = 2*i+1, r = 2*i+2;
    if (l < n && (h[l].pt < h[m].pt || (h[l].pt == h[m].pt && h[l].idx < h[m].idx))) m = l;
    if (r < n && (h[r].pt < h[m].pt || (h[r].pt == h[m].pt && h[r].idx < h[m].idx))) m = r;
    if (m == i) break;
    HN1834 t = h[i]; h[i] = h[m]; h[m] = t; i = m;
  }
}

int* getOrder(int** tasks, int tasksSize, int* tasksColSize, int* returnSize) {
  int* idx = (int*)malloc(tasksSize * sizeof(int));
  for (int i = 0; i < tasksSize; i++) idx[i] = i;
  // 排序按开始时间
  for (int i = 0; i < tasksSize - 1; i++)
    for (int j = i + 1; j < tasksSize; j++)
      if (tasks[idx[j]][0] < tasks[idx[i]][0]) {
        int t = idx[i]; idx[i] = idx[j]; idx[j] = t;
      }
  HN1834* heap = (HN1834*)malloc(tasksSize * sizeof(HN1834));
  int hSize = 0;
  int* ans = (int*)malloc(tasksSize * sizeof(int));
  int ai = 0;
  long long time = 0;
  int j = 0;
  while (ai < tasksSize) {
    if (hSize == 0 && j < tasksSize && tasks[idx[j]][0] > time) {
      time = tasks[idx[j]][0];
    }
    while (j < tasksSize && tasks[idx[j]][0] <= time) {
      heap[hSize] = (HN1834){tasks[idx[j]][1], idx[j]};
      heapUp1834(heap, hSize);
      hSize++;
      j++;
    }
    HN1834 top = heap[0];
    heap[0] = heap[--hSize];
    if (hSize) heapDown1834(heap, hSize, 0);
    ans[ai++] = top.idx;
    time += top.pt;
  }
  free(idx); free(heap);
  *returnSize = tasksSize;
  return ans;
}
