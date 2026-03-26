int cmpDesc(const void* a, const void* b) {
  int* pa = *(int**)a;
  int* pb = *(int**)b;
  return pb[0] - pa[0];
}

long long findMaximumElegance(int** items, int itemsSize, int* itemsColSize, int k) {
  qsort(items, itemsSize, sizeof(int*), cmpDesc);
  long long totalProfit = 0;
  int* seen = (int*)calloc(itemsSize + 1, sizeof(int));
  int* dupStack = (int*)malloc(k * sizeof(int));
  int dupTop = 0, distinctCount = 0;
  for (int i = 0; i < k; i++) {
    totalProfit += items[i][0];
    if (seen[items[i][1]]) dupStack[dupTop++] = items[i][0];
    else { seen[items[i][1]] = 1; distinctCount++; }
  }
  long long ans = totalProfit + (long long)distinctCount * distinctCount;
  for (int i = k; i < itemsSize; i++) {
    if (seen[items[i][1]] || dupTop == 0) continue;
    totalProfit -= dupStack[--dupTop];
    totalProfit += items[i][0];
    seen[items[i][1]] = 1;
    distinctCount++;
    long long cur = totalProfit + (long long)distinctCount * distinctCount;
    if (cur > ans) ans = cur;
  }
  free(seen); free(dupStack);
  return ans;
}
