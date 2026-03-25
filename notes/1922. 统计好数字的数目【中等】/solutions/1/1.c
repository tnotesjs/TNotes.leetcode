#define MOD 1000000007LL

static long long powMod1922(long long base, long long exp) {
  long long result = 1;
  base %= MOD;
  while (exp > 0) {
    if (exp & 1) result = result * base % MOD;
    exp >>= 1;
    base = base * base % MOD;
  }
  return result;
}

int countGoodNumbers(long long n) {
  long long even = (n + 1) / 2, odd = n / 2;
  return (int)(powMod1922(5, even) * powMod1922(4, odd) % MOD);
}
