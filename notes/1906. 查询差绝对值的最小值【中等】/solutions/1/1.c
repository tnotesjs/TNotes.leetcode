#include <stdlib.h>
#include <limits.h>

int* minDifference(int* nums, int numsSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
  int n = numsSize;
  int** pf = (int**)malloc((n+1) * sizeof(int*));
  for (int i = 0; i <= n; i++) pf[i] = (int*)calloc(101, sizeof(int));
  for (int i = 0; i < n; i++) {
    for (int v = 1; v <= 100; v++) pf[i+1][v] = pf[i][v];
    pf[i+1][nums[i]]++;
  }
  int* res = (int*)malloc(queriesSize * sizeof(int));
  *returnSize = queriesSize;
  for (int q = 0; q < queriesSize; q++) {
    int l = queries[q][0], r = queries[q][1];
    int prev = -1, md = INT_MAX;
    for (int v = 1; v <= 100; v++) {
      if (pf[r+1][v] - pf[l][v] > 0) {
        if (prev != -1 && v - prev < md) md = v - prev;
        prev = v;
      }
    }
    res[q] = md == INT_MAX ? -1 : md;
  }
  for (int i = 0; i <= n; i++) free(pf[i]);
  free(pf);
  return res;
}
