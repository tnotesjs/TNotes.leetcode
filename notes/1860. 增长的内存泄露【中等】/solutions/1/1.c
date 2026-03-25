#include <stdlib.h>

int* memLeak(int memory1, int memory2, int* returnSize) {
  int i = 1;
  while (i <= memory1 || i <= memory2) {
    if (memory1 >= memory2) memory1 -= i;
    else memory2 -= i;
    i++;
  }
  int* ans = (int*)malloc(3 * sizeof(int));
  ans[0] = i; ans[1] = memory1; ans[2] = memory2;
  *returnSize = 3;
  return ans;
}
