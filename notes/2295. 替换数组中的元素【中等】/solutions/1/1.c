typedef struct Node2295 {
    int key, val;
    struct Node2295* next;
} Node2295;

#define HASH2295_SIZE 100003

Node2295* hashTable2295[HASH2295_SIZE];

int hash2295(int key) {
    return ((key % HASH2295_SIZE) + HASH2295_SIZE) % HASH2295_SIZE;
}

void put2295(int key, int val) {
    int h = hash2295(key);
    Node2295* node = hashTable2295[h];
    while (node) {
        if (node->key == key) { node->val = val; return; }
        node = node->next;
    }
    Node2295* newNode = (Node2295*)malloc(sizeof(Node2295));
    newNode->key = key;
    newNode->val = val;
    newNode->next = hashTable2295[h];
    hashTable2295[h] = newNode;
}

int get2295(int key) {
    int h = hash2295(key);
    Node2295* node = hashTable2295[h];
    while (node) {
        if (node->key == key) return node->val;
        node = node->next;
    }
    return -1;
}

void del2295(int key) {
    int h = hash2295(key);
    Node2295 dummy = {0, 0, hashTable2295[h]};
    Node2295* prev = &dummy;
    while (prev->next) {
        if (prev->next->key == key) {
            Node2295* tmp = prev->next;
            prev->next = tmp->next;
            free(tmp);
            break;
        }
        prev = prev->next;
    }
    hashTable2295[h] = dummy.next;
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* arrayChange(int* nums, int numsSize, int** operations, int operationsSize, int* operationsColSize, int* returnSize) {
    memset(hashTable2295, 0, sizeof(hashTable2295));
    for (int i = 0; i < numsSize; i++) put2295(nums[i], i);
    for (int i = 0; i < operationsSize; i++) {
        int from = operations[i][0], to = operations[i][1];
        int idx = get2295(from);
        nums[idx] = to;
        del2295(from);
        put2295(to, idx);
    }
    *returnSize = numsSize;
    int* res = (int*)malloc(numsSize * sizeof(int));
    memcpy(res, nums, numsSize * sizeof(int));
    return res;
}
