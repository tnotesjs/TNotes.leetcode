// 哈希表实现
#define HASH_SIZE2260 100003
typedef struct Node2260 {
    int key, val;
    struct Node2260 *next;
} Node2260;

int minimumCardPickup(int* cards, int cardsSize) {
    Node2260 **table = (Node2260 **)calloc(HASH_SIZE2260, sizeof(Node2260 *));
    int minLen = cardsSize + 1;
    for (int i = 0; i < cardsSize; i++) {
        int h = cards[i] % HASH_SIZE2260;
        if (h < 0) h += HASH_SIZE2260;
        Node2260 *cur = table[h];
        while (cur && cur->key != cards[i]) cur = cur->next;
        if (cur) {
            int len = i - cur->val + 1;
            if (len < minLen) minLen = len;
            cur->val = i;
        } else {
            Node2260 *node = (Node2260 *)malloc(sizeof(Node2260));
            node->key = cards[i];
            node->val = i;
            node->next = table[h];
            table[h] = node;
        }
    }
    // 清理
    for (int i = 0; i < HASH_SIZE2260; i++) {
        Node2260 *cur = table[i];
        while (cur) { Node2260 *tmp = cur; cur = cur->next; free(tmp); }
    }
    free(table);
    return minLen > cardsSize ? -1 : minLen;
}
