int minimumOperations(char* num) {
    int n = strlen(num);
    int ans = n;
    char* targets[] = {"00", "25", "50", "75"};
    for (int t = 0; t < 4; t++) {
        int j = n - 1;
        while (j >= 0 && num[j] != targets[t][1]) j--;
        if (j < 0) continue;
        int i = j - 1;
        while (i >= 0 && num[i] != targets[t][0]) i--;
        if (i < 0) continue;
        int cost = n - 2 - i;
        if (cost < ans) ans = cost;
    }
    for (int i = 0; i < n; i++)
        if (num[i] == '0') { if (n - 1 < ans) ans = n - 1; break; }
    return ans;
}
