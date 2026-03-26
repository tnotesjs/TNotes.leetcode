bool isReachable(int targetX, int targetY) {
    int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
    int g = gcd(targetX, targetY);
    return (g & (g - 1)) == 0;
}
