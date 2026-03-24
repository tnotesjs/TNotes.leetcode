// 双向链表节点
typedef struct DLinkedNode {
    int key, val;
    struct DLinkedNode* prev;
    struct DLinkedNode* next;
} DLinkedNode;

// 哈希表条目
typedef struct HashEntry {
    int key;
    DLinkedNode* node;
    struct HashEntry* next; // 链地址法解冲突
} HashEntry;

#define HASH_SIZE 1024

typedef struct {
    int capacity;
    int size;
    DLinkedNode* head; // 哨兵头
    DLinkedNode* tail; // 哨兵尾
    HashEntry* table[HASH_SIZE];
} LRUCache;

int hashKey(int key) {
    return ((key % HASH_SIZE) + HASH_SIZE) % HASH_SIZE;
}

DLinkedNode* hashGet(LRUCache* cache, int key) {
    int h = hashKey(key);
    HashEntry* e = cache->table[h];
    while (e) {
        if (e->key == key) return e->node;
        e = e->next;
    }
    return NULL;
}

void hashPut(LRUCache* cache, int key, DLinkedNode* node) {
    int h = hashKey(key);
    HashEntry* e = (HashEntry*)malloc(sizeof(HashEntry));
    e->key = key;
    e->node = node;
    e->next = cache->table[h];
    cache->table[h] = e;
}

void hashRemove(LRUCache* cache, int key) {
    int h = hashKey(key);
    HashEntry* e = cache->table[h];
    HashEntry* prev = NULL;
    while (e) {
        if (e->key == key) {
            if (prev) prev->next = e->next;
            else cache->table[h] = e->next;
            free(e);
            return;
        }
        prev = e;
        e = e->next;
    }
}

void removeNode(DLinkedNode* node) {
    node->prev->next = node->next;
    node->next->prev = node->prev;
}

void addToHead(LRUCache* cache, DLinkedNode* node) {
    node->prev = cache->head;
    node->next = cache->head->next;
    cache->head->next->prev = node;
    cache->head->next = node;
}

LRUCache* lRUCacheCreate(int capacity) {
    LRUCache* cache = (LRUCache*)calloc(1, sizeof(LRUCache));
    cache->capacity = capacity;
    cache->head = (DLinkedNode*)malloc(sizeof(DLinkedNode));
    cache->tail = (DLinkedNode*)malloc(sizeof(DLinkedNode));
    cache->head->next = cache->tail;
    cache->tail->prev = cache->head;
    return cache;
}

int lRUCacheGet(LRUCache* obj, int key) {
    DLinkedNode* node = hashGet(obj, key);
    if (!node) return -1;
    removeNode(node);
    addToHead(obj, node);
    return node->val;
}

void lRUCachePut(LRUCache* obj, int key, int value) {
    DLinkedNode* node = hashGet(obj, key);
    if (node) {
        node->val = value;
        removeNode(node);
        addToHead(obj, node);
    } else {
        node = (DLinkedNode*)malloc(sizeof(DLinkedNode));
        node->key = key;
        node->val = value;
        hashPut(obj, key, node);
        addToHead(obj, node);
        obj->size++;
        if (obj->size > obj->capacity) {
            DLinkedNode* tail = obj->tail->prev;
            removeNode(tail);
            hashRemove(obj, tail->key);
            free(tail);
            obj->size--;
        }
    }
}

void lRUCacheFree(LRUCache* obj) {
    DLinkedNode* cur = obj->head;
    while (cur) {
        DLinkedNode* next = cur->next;
        free(cur);
        cur = next;
    }
    for (int i = 0; i < HASH_SIZE; i++) {
        HashEntry* e = obj->table[i];
        while (e) {
            HashEntry* next = e->next;
            free(e);
            e = next;
        }
    }
    free(obj);
}
