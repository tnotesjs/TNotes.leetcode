long long minimumCost(char* s) {
    int n = strlen(s);
    long long cost = 0;
    for (int i = 1; i < n; i++) {
        if (s[i] != s[i - 1]) {
            cost += (i < n - i) ? i : n - i;
        }
    }
    return cost;
}
