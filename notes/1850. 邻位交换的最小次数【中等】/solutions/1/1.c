#include <string.h>
#include <stdlib.h>

static void nextPerm1850(char* arr, int n) {
  int i = n - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) i--;
  if (i >= 0) {
    int j = n - 1;
    while (arr[j] <= arr[i]) j--;
    char t = arr[i]; arr[i] = arr[j]; arr[j] = t;
  }
  int l = i + 1, r = n - 1;
  while (l < r) { char t = arr[l]; arr[l] = arr[r]; arr[r] = t; l++; r--; }
}

int getMinSwaps(char* num, int k) {
  int n = strlen(num);
  char* target = (char*)malloc(n + 1);
  strcpy(target, num);
  for (int i = 0; i < k; i++) nextPerm1850(target, n);
  char* cur = (char*)malloc(n + 1);
  strcpy(cur, num);
  int swaps = 0;
  for (int i = 0; i < n; i++) {
    if (cur[i] != target[i]) {
      int j = i + 1;
      while (cur[j] != target[i]) j++;
      while (j > i) {
        char t = cur[j]; cur[j] = cur[j-1]; cur[j-1] = t;
        j--;
        swaps++;
      }
    }
  }
  free(target); free(cur);
  return swaps;
}
