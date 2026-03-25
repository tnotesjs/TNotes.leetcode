int chalkReplacer(int* chalk, int chalkSize, int k) {
  long long total = 0;
  for (int i = 0; i < chalkSize; i++) total += chalk[i];
  k %= total;
  for (int i = 0; i < chalkSize; i++) {
    if (k < chalk[i]) return i;
    k -= chalk[i];
  }
  return 0;
}
