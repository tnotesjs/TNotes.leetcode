#include <stdlib.h>
#include <math.h>

static int cmp1921(const void* a, const void* b) {
  return *(int*)a - *(int*)b;
}

int eliminateMaximum(int* dist, int distSize, int* speed, int speedSize) {
  int n = distSize;
  int* arr = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) arr[i] = (dist[i] + speed[i] - 1) / speed[i];
  qsort(arr, n, sizeof(int), cmp1921);
  for (int i = 0; i < n; i++) {
    if (arr[i] <= i) { free(arr); return i; }
  }
  free(arr);
  return n;
}
