int hammingWeight(int n) {
    int count = 0;
    // Brian Kernighan：每次清除最右边的 1
    while (n != 0) {
        count++;
        n &= n - 1;
    }
    return count;
}
