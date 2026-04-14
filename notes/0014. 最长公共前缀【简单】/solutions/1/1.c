char* longestCommonPrefix(char** strs, int strsSize) {
    // 找最短字符串
    char* minStr = strs[0];
    for (int i = 1; i < strsSize; i++)
        if (strlen(strs[i]) < strlen(minStr))
            minStr = strs[i];

    int m = strlen(minStr);
    for (int i = 0; i < m; i++)
        for (int j = 0; j < strsSize; j++)
            if (strs[j][i] != minStr[i]) {
                char* res = (char*)malloc((i + 1) * sizeof(char));
                strncpy(res, minStr, i);
                res[i] = '\0';
                return res;
            }
    return minStr;
}
