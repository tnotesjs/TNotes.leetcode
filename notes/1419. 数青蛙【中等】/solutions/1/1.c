int minNumberOfFrogs(char* croakOfFrogs) {
    int cnt[5] = {0}; // c r o a k
    int maxFrogs = 0;
    for (int i = 0; croakOfFrogs[i]; i++) {
        int idx;
        switch (croakOfFrogs[i]) {
            case 'c': idx = 0; break;
            case 'r': idx = 1; break;
            case 'o': idx = 2; break;
            case 'a': idx = 3; break;
            default:  idx = 4; break;
        }
        if (idx == 0) {
            cnt[0]++;
            int active = cnt[0] - cnt[4];
            if (active > maxFrogs) maxFrogs = active;
        } else {
            if (cnt[idx - 1] <= cnt[idx]) return -1;
            cnt[idx]++;
        }
    }
    return (cnt[0] == cnt[1] && cnt[1] == cnt[2] && cnt[2] == cnt[3] && cnt[3] == cnt[4])
        ? maxFrogs : -1;
}
