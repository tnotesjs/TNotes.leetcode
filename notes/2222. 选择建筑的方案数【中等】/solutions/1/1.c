long long numberOfWays(char* s) {
    long long total0 = 0, total1 = 0;
    for (int i = 0; s[i]; i++) {
        if (s[i] == '0') total0++;
        else total1++;
    }
    long long count0 = 0, count1 = 0, ans = 0;
    for (int i = 0; s[i]; i++) {
        if (s[i] == '0') {
            ans += count1 * (total1 - count1);
            count0++;
        } else {
            ans += count0 * (total0 - count0);
            count1++;
        }
    }
    return ans;
}
