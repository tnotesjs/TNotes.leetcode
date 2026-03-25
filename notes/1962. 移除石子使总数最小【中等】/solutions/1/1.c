#include <stdlib.h>

static void siftDown1962(int* h, int i, int n) {
  while (1) {
    int largest = i, l = 2*i+1, r = 2*i+2;
    if (l < n && h[l] > h[largest]) largest = l;
    if (r < n && h[r] > h[largest]) largest = r;
    if (largest == i) break;
    int t = h[i]; h[i] = h[largest]; h[largest] = t;
    i = largest;
  }
}

int minStoneSum(int* piles, int pilesSize, int k) {
  int* h = (int*)malloc(pilesSize * sizeof(int));
  for (int i = 0; i < pilesSize; i++) h[i] = piles[i];
  for (int i = pilesSize/2-1; i >= 0; i--) siftDown1962(h, i, pilesSize);
  for (int i = 0; i < k; i++) {
    h[0] -= h[0] / 2;
    siftDown1962(h, 0, pilesSize);
  }
  int sum = 0;
  for (int i = 0; i < pilesSize; i++) sum += h[i];
  free(h);
  return sum;
}
