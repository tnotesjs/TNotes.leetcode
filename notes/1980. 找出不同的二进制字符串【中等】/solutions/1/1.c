#include <stdlib.h>
#include <string.h>

char* findDifferentBinaryString(char** nums, int numsSize) {
  int n = numsSize;
  char* res = (char*)malloc(n + 1);
  for (int i = 0; i < n; i++) res[i] = nums[i][i] == '0' ? '1' : '0';
  res[n] = '\0';
  return res;
}
