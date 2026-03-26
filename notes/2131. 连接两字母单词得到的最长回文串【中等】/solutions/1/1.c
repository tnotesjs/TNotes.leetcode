int longestPalindrome(char** words, int wordsSize) {
    // 用 26x26 数组统计两字母组合出现次数
    int count[26][26] = {0};
    for (int i = 0; i < wordsSize; i++) {
        count[words[i][0] - 'a'][words[i][1] - 'a']++;
    }
    int res = 0;
    int hasCenter = 0;
    for (int i = 0; i < 26; i++) {
        // 回文对 (i, i)
        res += count[i][i] / 2 * 4;
        if (count[i][i] % 2 == 1) hasCenter = 1;
        // 非回文对 (i, j) 和 (j, i)
        for (int j = i + 1; j < 26; j++) {
            int mn = count[i][j] < count[j][i] ? count[i][j] : count[j][i];
            res += mn * 4;
        }
    }
    if (hasCenter) res += 2;
    return res;
}
