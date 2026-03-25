#include <stdlib.h>
#include <string.h>

int minimizeTheDifference(int** mat, int matSize, int* matColSize, int target) {
  int maxSum = 0;
  for (int i = 0; i < matSize; i++) {
    int mx = 0;
    for (int j = 0; j < matColSize[i]; j++) if (mat[i][j] > mx) mx = mat[i][j];
    maxSum += mx;
  }
  int cap = maxSum + 1;
  char* cur = (char*)calloc(cap, 1);
  char* nxt = (char*)calloc(cap, 1);
  cur[0] = 1;
  for (int i = 0; i < matSize; i++) {
    memset(nxt, 0, cap);
    for (int s = 0; s < cap; s++) {
      if (!cur[s]) continue;
      for (int j = 0; j < matColSize[i]; j++) {
        int ns = s + mat[i][j];
        if (ns < cap) nxt[ns] = 1;
      }
    }
    char* tmp = cur; cur = nxt; nxt = tmp;
  }
  int best = maxSum + target;
  for (int s = 0; s < cap; s++) {
    if (cur[s]) {
      int d = s - target; if (d < 0) d = -d;
      if (d < best) best = d;
    }
  }
  free(cur); free(nxt);
  return best;
}
