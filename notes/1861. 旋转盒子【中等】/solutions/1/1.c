#include <stdlib.h>

char** rotateTheBox(char** box, int boxSize, int* boxColSize, int* returnSize, int** returnColumnSizes) {
  int m = boxSize, n = boxColSize[0];
  // 让石头下落
  for (int i = 0; i < m; i++) {
    int empty = n - 1;
    for (int j = n - 1; j >= 0; j--) {
      if (box[i][j] == '*') {
        empty = j - 1;
      } else if (box[i][j] == '#') {
        box[i][j] = '.';
        box[i][empty] = '#';
        empty--;
      }
    }
  }
  char** res = (char**)malloc(n * sizeof(char*));
  for (int j = 0; j < n; j++) {
    res[j] = (char*)malloc((m + 1) * sizeof(char));
    for (int i = 0; i < m; i++) {
      res[j][m - 1 - i] = box[i][j];
    }
    res[j][m] = '\0';
  }
  *returnSize = n;
  *returnColumnSizes = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) (*returnColumnSizes)[i] = m;
  return res;
}
