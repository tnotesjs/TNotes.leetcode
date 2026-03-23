// 用排序后的字符串作为 key，通过简单哈希表（开放寻址）实现分组
#define HASH_SIZE 20011

typedef struct Entry {
    char key[110];       // 排序后的 key
    int* indices;        // 原字符串下标列表
    int count;
    int cap;
} Entry;

static Entry table[HASH_SIZE];
static int used[HASH_SIZE];

int charCmp(const void* a, const void* b) { return *(char*)a - *(char*)b; }

static unsigned int hashStr(const char* s) {
    unsigned int h = 5381;
    while (*s) h = h * 33 + (unsigned char)*s++;
    return h % HASH_SIZE;
}

char*** groupAnagrams(char** strs, int strsSize, int* returnSize, int** returnColumnSizes) {
    memset(used, 0, sizeof(used));

    for (int i = 0; i < strsSize; i++) {
        char key[110];
        strcpy(key, strs[i]);
        int len = strlen(key);
        qsort(key, len, sizeof(char), charCmp);

        unsigned int h = hashStr(key);
        while (used[h] && strcmp(table[h].key, key) != 0)
            h = (h + 1) % HASH_SIZE;

        if (!used[h]) {
            used[h] = 1;
            strcpy(table[h].key, key);
            table[h].cap = 4;
            table[h].count = 0;
            table[h].indices = (int*)malloc(4 * sizeof(int));
        }
        if (table[h].count == table[h].cap) {
            table[h].cap *= 2;
            table[h].indices = (int*)realloc(table[h].indices, table[h].cap * sizeof(int));
        }
        table[h].indices[table[h].count++] = i;
    }

    // 统计组数
    int groups = 0;
    for (int i = 0; i < HASH_SIZE; i++) if (used[i]) groups++;

    char*** ans = (char***)malloc(groups * sizeof(char**));
    *returnColumnSizes = (int*)malloc(groups * sizeof(int));
    int g = 0;
    for (int i = 0; i < HASH_SIZE; i++) {
        if (!used[i]) continue;
        int cnt = table[i].count;
        ans[g] = (char**)malloc(cnt * sizeof(char*));
        (*returnColumnSizes)[g] = cnt;
        for (int j = 0; j < cnt; j++)
            ans[g][j] = strs[table[i].indices[j]];
        free(table[i].indices);
        g++;
    }
    *returnSize = groups;
    return ans;
}
