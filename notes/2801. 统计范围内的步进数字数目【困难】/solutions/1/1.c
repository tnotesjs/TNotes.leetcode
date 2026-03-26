int dfs(int pos, int last, int tight, int started, char* s, int n,
        int memo[101][11][2][2], int valid[101][11][2][2], int vid) {
  if (pos == n) return started;
  int li = last + 1;
  if (valid[pos][li][tight][started] == vid)
    return memo[pos][li][tight][started];
  valid[pos][li][tight][started] = vid;
  int limit = tight ? s[pos] - '0' : 9;
  long long res = 0;
  for (int d = 0; d <= limit; d++) {
    if (!started && d == 0)
      res += dfs(pos + 1, -1, tight && d == limit, 0, s, n, memo, valid, vid);
    else if (!started || abs(d - last) == 1)
      res += dfs(pos + 1, d, tight && d == limit, 1, s, n, memo, valid, vid);
  }
  res %= 1000000007;
  memo[pos][li][tight][started] = (int)res;
  return (int)res;
}

int countSteppingNumbers(char* low, char* high) {
  static int memo[101][11][2][2], valid[101][11][2][2];
  static int vid = 0;
  vid++;
  int h = dfs(0, -1, 1, 0, high, strlen(high), memo, valid, vid);
  int len = strlen(low);
  char buf[102];
  strcpy(buf, low);
  int i = len - 1;
  while (i >= 0 && buf[i] == '0') { buf[i] = '9'; i--; }
  if (i >= 0) buf[i]--;
  int start = 0;
  while (start < len - 1 && buf[start] == '0') start++;
  vid++;
  int l = dfs(0, -1, 1, 0, buf + start, len - start, memo, valid, vid);
  return ((h - l) % 1000000007 + 1000000007) % 1000000007;
}
