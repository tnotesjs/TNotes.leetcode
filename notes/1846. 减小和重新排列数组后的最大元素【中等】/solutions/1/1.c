#include <stdlib.h>

int cmp1846(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int maximumElementAfterDecrementingAndRearranging(int* arr, int arrSize) {
  qsort(arr, arrSize, sizeof(int), cmp1846);
  arr[0] = 1;
  for (int i = 1; i < arrSize; i++) {
    if (arr[i] > arr[i - 1] + 1) arr[i] = arr[i - 1] + 1;
  }
  return arr[arrSize - 1];
}
