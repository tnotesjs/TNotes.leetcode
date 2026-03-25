#include <stdlib.h>
#include <string.h>

int* minOperations(char* boxes, int* returnSize) {
  int n = strlen(boxes);
  int* ans = (int*)calloc(n, sizeof(int));
  int count = 0, ops = 0;
  for (int i = 0; i < n; i++) {
    ans[i] += ops;
    count += boxes[i] == '1' ? 1 : 0;
    ops += count;
  }
  count = 0; ops = 0;
  for (int i = n - 1; i >= 0; i--) {
    ans[i] += ops;
    count += boxes[i] == '1' ? 1 : 0;
    ops += count;
  }
  *returnSize = n;
  return ans;
}
