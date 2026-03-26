int longestString(int x, int y, int z) {
    int m = x < y ? x : y;
    return (m * 2 + (x != y ? 1 : 0) + z) * 2;
}
