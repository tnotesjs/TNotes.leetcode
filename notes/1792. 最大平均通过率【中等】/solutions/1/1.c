#include <stdlib.h>

typedef struct { double gain; int pass; int total; } HNode1792;

static double calcGain1792(int p, int t) {
  return (double)(p + 1) / (t + 1) - (double)p / t;
}

static void heapDown1792(HNode1792* h, int n, int i) {
  while (1) {
    int mx = i, l = 2 * i + 1, r = 2 * i + 2;
    if (l < n && h[l].gain > h[mx].gain) mx = l;
    if (r < n && h[r].gain > h[mx].gain) mx = r;
    if (mx == i) break;
    HNode1792 tmp = h[i]; h[i] = h[mx]; h[mx] = tmp;
    i = mx;
  }
}

double maxAverageRatio(int** classes, int classesSize, int* classesColSize, int extraStudents) {
  HNode1792* h = (HNode1792*)malloc(classesSize * sizeof(HNode1792));
  for (int i = 0; i < classesSize; i++) {
    h[i].pass = classes[i][0];
    h[i].total = classes[i][1];
    h[i].gain = calcGain1792(h[i].pass, h[i].total);
  }
  for (int i = classesSize / 2 - 1; i >= 0; i--) heapDown1792(h, classesSize, i);
  for (int k = 0; k < extraStudents; k++) {
    h[0].pass++;
    h[0].total++;
    h[0].gain = calcGain1792(h[0].pass, h[0].total);
    heapDown1792(h, classesSize, 0);
  }
  double sum = 0;
  for (int i = 0; i < classesSize; i++) sum += (double)h[i].pass / h[i].total;
  free(h);
  return sum / classesSize;
}
