long long wonderfulSubstrings(char* word) {
  int cnt[1024] = {0};
  cnt[0] = 1;
  int mask = 0;
  long long res = 0;
  for (int i = 0; word[i]; i++) {
    mask ^= 1 << (word[i] - 'a');
    res += cnt[mask];
    for (int b = 0; b < 10; b++) res += cnt[mask ^ (1 << b)];
    cnt[mask]++;
  }
  return res;
}
