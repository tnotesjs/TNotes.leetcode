int cmp(const void* a, const void* b) {
  return *(int*)a > *(int*)b ? 1 : -1;
}

int maxIncreasingGroups(int* usageLimits, int usageLimitsSize) {
  qsort(usageLimits, usageLimitsSize, sizeof(int), cmp);
  long long k = 0, surplus = 0;
  for (int i = 0; i < usageLimitsSize; i++) {
    surplus += usageLimits[i];
    if (surplus >= k + 1) {
      k++;
      surplus -= k;
    }
  }
  return (int)k;
}
