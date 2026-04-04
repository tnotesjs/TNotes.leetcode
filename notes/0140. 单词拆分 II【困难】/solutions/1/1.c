/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** result;
int resultSize;
bool dp[21];
int pathStart[21], pathEnd[21]; // 记录路径中每个词的起止位置
int pathSize;
int N;

bool hasWord(const char* s, int start, int end, char** wordDict, int dictSize) {
    int len = end - start;
    for (int i = 0; i < dictSize; i++) {
        if ((int)strlen(wordDict[i]) == len && strncmp(s + start, wordDict[i], len) == 0)
            return true;
    }
    return false;
}

void dfs(const char* s, int start, char** wordDict, int dictSize) {
    if (start == N) {
        // 拼接路径中的每个词，词间加空格
        char* sentence = (char*)malloc(50 * sizeof(char));
        int pos = 0;
        for (int i = 0; i < pathSize; i++) {
            if (i > 0) sentence[pos++] = ' ';
            int len = pathEnd[i] - pathStart[i];
            memcpy(sentence + pos, s + pathStart[i], len);
            pos += len;
        }
        sentence[pos] = '\0';
        result[resultSize++] = sentence;
        return;
    }
    for (int end = start + 1; end <= N; end++) {
        // 剪枝：只走 dp[end] 可达的分支
        if (dp[end] && hasWord(s, start, end, wordDict, dictSize)) {
            pathStart[pathSize] = start;
            pathEnd[pathSize] = end;
            pathSize++;
            dfs(s, end, wordDict, dictSize);
            pathSize--;
        }
    }
}

char** wordBreak(char* s, char** wordDict, int wordDictSize, int* returnSize) {
    N = strlen(s);
    memset(dp, 0, sizeof(dp));
    dp[0] = true;
    for (int i = 1; i <= N; i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && hasWord(s, j, i, wordDict, wordDictSize)) {
                dp[i] = true;
                break;
            }
        }
    }
    result = (char**)malloc(10000 * sizeof(char*));
    resultSize = 0;
    pathSize = 0;
    dfs(s, 0, wordDict, wordDictSize);
    *returnSize = resultSize;
    return result;
}
