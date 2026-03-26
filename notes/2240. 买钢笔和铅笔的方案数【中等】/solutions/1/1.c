long long waysToBuyPensPencils(int total, int cost1, int cost2) {
    long long count = 0;
    for (int pens = 0; (long long)pens * cost1 <= total; pens++) {
        long long remaining = total - (long long)pens * cost1;
        count += remaining / cost2 + 1;
    }
    return count;
}
