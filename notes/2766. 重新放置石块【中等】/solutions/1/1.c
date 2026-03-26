// 用哈希集合实现
typedef struct Node {
    int val;
    struct Node *next;
} Node;

#define HASH_SIZE 100003

int cmp(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int *relocateMarbles(int *nums, int numsSize, int *moveFrom, int moveFromSize, int *moveTo, int moveToSize, int *returnSize) {
    Node *table[HASH_SIZE];
    memset(table, 0, sizeof(table));

    // 插入
    void insert(int val) {
        int h = ((val % HASH_SIZE) + HASH_SIZE) % HASH_SIZE;
        Node *cur = table[h];
        while (cur) {
            if (cur->val == val) return;
            cur = cur->next;
        }
        Node *node = (Node *)malloc(sizeof(Node));
        node->val = val;
        node->next = table[h];
        table[h] = node;
    }

    // 删除
    void del(int val) {
        int h = ((val % HASH_SIZE) + HASH_SIZE) % HASH_SIZE;
        Node **pp = &table[h];
        while (*pp) {
            if ((*pp)->val == val) {
                Node *tmp = *pp;
                *pp = tmp->next;
                free(tmp);
                return;
            }
            pp = &(*pp)->next;
        }
    }

    for (int i = 0; i < numsSize; i++) insert(nums[i]);
    for (int i = 0; i < moveFromSize; i++) {
        del(moveFrom[i]);
        insert(moveTo[i]);
    }

    int cap = numsSize + moveFromSize;
    int *res = (int *)malloc(cap * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < HASH_SIZE; i++) {
        Node *cur = table[i];
        while (cur) {
            res[cnt++] = cur->val;
            Node *tmp = cur;
            cur = cur->next;
            free(tmp);
        }
    }
    qsort(res, cnt, sizeof(int), cmp);
    *returnSize = cnt;
    return res;
}
