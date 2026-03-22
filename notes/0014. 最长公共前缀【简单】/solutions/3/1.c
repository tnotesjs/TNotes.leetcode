char* longestCommonPrefix(char** strs, int strsSize) {
    int i = 0;
    while (strs[0][i] != '\0') {
        char c = strs[0][i];
        for (int j = 1; j < strsSize; j++) {
            if (strs[j][i] == '\0' || strs[j][i] != c) {
                char* res = (char*)malloc((i + 1) * sizeof(char));
                strncpy(res, strs[0], i);
                res[i] = '\0';
                return res;
            }
        }
        i++;
    }
    return strs[0];
}
