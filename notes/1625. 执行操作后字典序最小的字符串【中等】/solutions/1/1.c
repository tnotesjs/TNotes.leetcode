#include <string.h>
#include <stdlib.h>

#define MAXN 10001
static char pool[MAXN][101];
static int poolIdx;

char* findLexSmallestString(char* s, int a, int b) {
    int n = strlen(s);
    poolIdx = 0;
    // BFS 用哈希集合去重，简化处理：利用长度小且有限状态
    char** queue = (char**)malloc(MAXN * sizeof(char*));
    int front = 0, rear = 0;
    // 简化：直接用池
    strcpy(pool[poolIdx], s);
    queue[rear++] = pool[poolIdx++];
    char* res = queue[0];
    // 简化 visited 用数组匹配
    char** visited = (char**)malloc(MAXN * sizeof(char*));
    int visSize = 0;
    visited[visSize++] = queue[0];
    
    while (front < rear && rear < MAXN - 2) {
        char* cur = queue[front++];
        if (strcmp(cur, res) < 0) res = cur;
        // add a to odd positions
        char* added = pool[poolIdx++];
        for (int i = 0; i < n; i++)
            added[i] = (i % 2 == 1) ? '0' + (cur[i] - '0' + a) % 10 : cur[i];
        added[n] = '\0';
        int found = 0;
        for (int i = 0; i < visSize; i++)
            if (strcmp(visited[i], added) == 0) { found = 1; break; }
        if (!found && rear < MAXN - 1) {
            visited[visSize++] = added;
            queue[rear++] = added;
        }
        // rotate right by b
        char* rotated = pool[poolIdx++];
        memcpy(rotated, cur + n - b, b);
        memcpy(rotated + b, cur, n - b);
        rotated[n] = '\0';
        found = 0;
        for (int i = 0; i < visSize; i++)
            if (strcmp(visited[i], rotated) == 0) { found = 1; break; }
        if (!found && rear < MAXN - 1) {
            visited[visSize++] = rotated;
            queue[rear++] = rotated;
        }
    }
    // 检查剩余队列
    while (front < rear) {
        if (strcmp(queue[front], res) < 0) res = queue[front];
        front++;
    }
    free(queue); free(visited);
    char* result = (char*)malloc((n + 1) * sizeof(char));
    strcpy(result, res);
    return result;
}
