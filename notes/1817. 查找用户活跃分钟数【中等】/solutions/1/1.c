#include <stdlib.h>
#include <string.h>

int* findingUsersActiveMinutes(int** logs, int logsSize, int* logsColSize, int k, int* returnSize) {
  // 排序按 id 和 time
  int (*arr)[2] = (int(*)[2])malloc(logsSize * 2 * sizeof(int));
  for (int i = 0; i < logsSize; i++) { arr[i][0] = logs[i][0]; arr[i][1] = logs[i][1]; }
  // 排序
  for (int i = 0; i < logsSize - 1; i++)
    for (int j = i + 1; j < logsSize; j++)
      if (arr[i][0] > arr[j][0] || (arr[i][0] == arr[j][0] && arr[i][1] > arr[j][1])) {
        int t0 = arr[i][0], t1 = arr[i][1];
        arr[i][0] = arr[j][0]; arr[i][1] = arr[j][1];
        arr[j][0] = t0; arr[j][1] = t1;
      }
  int* ans = (int*)calloc(k, sizeof(int));
  int i = 0;
  while (i < logsSize) {
    int id = arr[i][0], uam = 1;
    int j = i + 1;
    while (j < logsSize && arr[j][0] == id) {
      if (arr[j][1] != arr[j-1][1]) uam++;
      j++;
    }
    if (uam <= k) ans[uam - 1]++;
    i = j;
  }
  free(arr);
  *returnSize = k;
  return ans;
}
