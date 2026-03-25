#include <stdlib.h>

int cmp1798(const void* a, const void* b) {
  return *(int*)a - *(int*)b;
}

int getMaximumConsecutive(int* coins, int coinsSize) {
  qsort(coins, coinsSize, sizeof(int), cmp1798);
  long long reach = 0;
  for (int i = 0; i < coinsSize; i++) {
    if (coins[i] > reach + 1) break;
    reach += coins[i];
  }
  return (int)(reach + 1);
}
