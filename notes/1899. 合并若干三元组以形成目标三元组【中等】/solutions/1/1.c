#include <stdbool.h>

bool mergeTriplets(int** triplets, int tripletsSize, int* tripletsColSize, int* target, int targetSize) {
  int f0 = 0, f1 = 0, f2 = 0;
  for (int i = 0; i < tripletsSize; i++) {
    if (triplets[i][0] <= target[0] && triplets[i][1] <= target[1] && triplets[i][2] <= target[2]) {
      if (triplets[i][0] == target[0]) f0 = 1;
      if (triplets[i][1] == target[1]) f1 = 1;
      if (triplets[i][2] == target[2]) f2 = 1;
    }
  }
  return f0 && f1 && f2;
}
