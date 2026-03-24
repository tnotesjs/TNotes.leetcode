int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }

bool canMeasureWater(int jug1Capacity, int jug2Capacity, int targetCapacity) {
    if (jug1Capacity + jug2Capacity < targetCapacity) return false;
    return targetCapacity % gcd(jug1Capacity, jug2Capacity) == 0;
}
