char* longestCommonPrefix(char** strs, int strsSize) {
    // 以第一个字符串为初始公共前缀
    char* prefix = strs[0];
    int len = strlen(prefix);

    for (int i = 1; i < strsSize; i++) {
        // 不断缩短前缀直到它是 strs[i] 的前缀
        while (strncmp(strs[i], prefix, len) != 0) {
            len--;
            if (len == 0) {
                char* res = (char*)malloc(1);
                res[0] = '\0';
                return res;
            }
        }
    }

    char* res = (char*)malloc((len + 1) * sizeof(char));
    strncpy(res, prefix, len);
    res[len] = '\0';
    return res;
}
