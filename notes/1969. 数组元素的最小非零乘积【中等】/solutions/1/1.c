#define MOD1969 1000000007LL

static long long powMod1969(long long base, long long exp) {
  long long res = 1;
  base %= MOD1969;
  while (exp > 0) {
    if (exp & 1) res = res * base % MOD1969;
    exp >>= 1;
    base = base * base % MOD1969;
  }
  return res;
}

int minNonZeroProduct(int p) {
  long long maxVal = (1LL << p) - 1;
  long long half = maxVal - 1;
  long long cnt = (1LL << (p - 1)) - 1;
  return (int)(maxVal % MOD1969 * powMod1969(half % MOD1969, cnt) % MOD1969);
}
