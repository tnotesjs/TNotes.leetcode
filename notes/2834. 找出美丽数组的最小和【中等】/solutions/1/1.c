int minimumPossibleSum(int n, int target) {
    long long MOD = 1000000007;
    long long N = n, T = target;
    long long half = (T - 1) / 2;
    long long M = N < half ? N : half;
    long long rem = N - M;
    long long inv2 = 500000004;
    long long s1 = M % MOD * ((M + 1) % MOD) % MOD * inv2 % MOD;
    long long s2 = 0;
    if (rem > 0)
        s2 = (rem % MOD * (T % MOD) % MOD + rem % MOD * ((rem - 1) % MOD) % MOD * inv2 % MOD) % MOD;
    return (int)((s1 + s2) % MOD);
}
