#include <math.h>

int minSpeedOnTime(int* dist, int distSize, double hour) {
  int n = distSize;
  if (hour <= n - 1) return -1;
  int lo = 1, hi = 10000000;
  while (lo < hi) {
    int mid = (lo + hi) / 2;
    double time = 0;
    for (int i = 0; i < n - 1; i++) {
      time += ceil((double)dist[i] / mid);
    }
    time += (double)dist[n - 1] / mid;
    if (time <= hour) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}
