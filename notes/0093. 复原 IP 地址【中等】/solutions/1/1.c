/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
void dfs(char* s, int start, int seg, char segments[][4], char** result, int* returnSize) {
    if (seg == 4 && start == (int)strlen(s)) {
        char* ip = (char*)malloc(16);
        sprintf(ip, "%s.%s.%s.%s", segments[0], segments[1], segments[2], segments[3]);
        result[(*returnSize)++] = ip;
        return;
    }
    if (seg == 4 || start == (int)strlen(s)) return;

    for (int len = 1; len <= 3 && start + len <= (int)strlen(s); len++) {
        if (len > 1 && s[start] == '0') break; // 禁止前导零
        char part[4] = {0};
        strncpy(part, s + start, len);
        if (atoi(part) > 255) break;
        strcpy(segments[seg], part);
        dfs(s, start + len, seg + 1, segments, result, returnSize);
    }
}

char** restoreIpAddresses(char* s, int* returnSize) {
    *returnSize = 0;
    char** result = (char**)malloc(sizeof(char*) * 256);
    char segments[4][4];
    dfs(s, 0, 0, segments, result, returnSize);
    return result;
}
