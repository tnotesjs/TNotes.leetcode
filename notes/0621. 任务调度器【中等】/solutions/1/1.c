int leastInterval(char* tasks, int tasksSize, int n) {
    int cnt[26] = {0};
    for (int i = 0; i < tasksSize; i++) cnt[tasks[i] - 'A']++;
    int maxCnt = 0, maxNum = 0;
    for (int i = 0; i < 26; i++) {
        if (cnt[i] > maxCnt) { maxCnt = cnt[i]; maxNum = 1; }
        else if (cnt[i] == maxCnt) maxNum++;
    }
    int res = (maxCnt - 1) * (n + 1) + maxNum;
    return res > tasksSize ? res : tasksSize;
}
