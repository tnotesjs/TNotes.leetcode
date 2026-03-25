#include <stdlib.h>

long long maxMatrixSum(int** matrix, int matrixSize, int* matrixColSize) {
  long long totalAbs = 0;
  int minAbs = 0x7fffffff, negCount = 0;
  for (int i = 0; i < matrixSize; i++) {
    for (int j = 0; j < matrixColSize[i]; j++) {
      int v = matrix[i][j];
      int a = v < 0 ? -v : v;
      totalAbs += a;
      if (a < minAbs) minAbs = a;
      if (v < 0) negCount++;
    }
  }
  return negCount % 2 == 0 ? totalAbs : totalAbs - 2 * minAbs;
}
