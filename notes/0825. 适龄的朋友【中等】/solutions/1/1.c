int numFriendRequests(int* ages, int agesSize) {
    int cnt[121] = {0};
    for (int i = 0; i < agesSize; i++) cnt[ages[i]]++;
    int res = 0;
    for (int a = 1; a <= 120; a++)
        for (int b = 1; b <= 120; b++) {
            if (2 * b <= a + 14) continue;
            if (b > a) continue;
            res += cnt[a] * (cnt[b] - (a == b ? 1 : 0));
        }
    return res;
}
