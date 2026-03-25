int beautySum(char* s) {
  int n = 0;
  while (s[n]) n++;
  int ans = 0;
  for (int i = 0; i < n; i++) {
    int cnt[26] = {0};
    for (int j = i; j < n; j++) {
      cnt[s[j] - 'a']++;
      int maxF = 0, minF = n;
      for (int k = 0; k < 26; k++) {
        if (cnt[k] > 0) {
          if (cnt[k] > maxF) maxF = cnt[k];
          if (cnt[k] < minF) minF = cnt[k];
        }
      }
      ans += maxF - minF;
    }
  }
  return ans;
}
