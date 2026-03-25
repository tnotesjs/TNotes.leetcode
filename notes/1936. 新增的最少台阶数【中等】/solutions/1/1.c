int addRungs(int* rungs, int rungsSize, int dist) {
  int res = 0, prev = 0;
  for (int i = 0; i < rungsSize; i++) {
    if (rungs[i] - prev > dist) {
      res += (rungs[i] - prev - 1) / dist;
    }
    prev = rungs[i];
  }
  return res;
}
