#define HASH_SIZE 100003

typedef struct Node {
    char* key;
    int count;
    struct Node* next;
} Node;

int maxFreq(char* s, int maxLetters, int minSize, int maxSize) {
    int n = strlen(s);
    Node** table = calloc(HASH_SIZE, sizeof(Node*));
    int ans = 0;
    for (int i = 0; i <= n - minSize; i++) {
        // 统计不同字符数
        int seen[26] = {0};
        int unique = 0;
        for (int j = i; j < i + minSize; j++) {
            if (!seen[s[j] - 'a']) {
                seen[s[j] - 'a'] = 1;
                unique++;
            }
        }
        if (unique > maxLetters) continue;
        // 哈希
        unsigned long h = 0;
        for (int j = i; j < i + minSize; j++) h = h * 31 + s[j];
        int idx = h % HASH_SIZE;
        Node* cur = table[idx];
        while (cur && strncmp(cur->key, s + i, minSize) != 0) cur = cur->next;
        if (cur) {
            cur->count++;
            if (cur->count > ans) ans = cur->count;
        } else {
            Node* node = malloc(sizeof(Node));
            node->key = malloc(minSize + 1);
            strncpy(node->key, s + i, minSize);
            node->key[minSize] = '\0';
            node->count = 1;
            node->next = table[idx];
            table[idx] = node;
            if (1 > ans) ans = 1;
        }
    }
    for (int i = 0; i < HASH_SIZE; i++) {
        Node* cur = table[i];
        while (cur) {
            Node* tmp = cur;
            cur = cur->next;
            free(tmp->key);
            free(tmp);
        }
    }
    free(table);
    return ans;
}
