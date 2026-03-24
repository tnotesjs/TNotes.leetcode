#define HASH_SIZE 100003
typedef struct Node { int val; struct Node* next; } Node;

void hashInsert(Node** table, int val) {
    int idx = ((unsigned)val) % HASH_SIZE;
    Node* n = (Node*)malloc(sizeof(Node));
    n->val = val; n->next = table[idx]; table[idx] = n;
}

bool hashContains(Node** table, int val) {
    int idx = ((unsigned)val) % HASH_SIZE;
    for (Node* n = table[idx]; n; n = n->next) if (n->val == val) return true;
    return false;
}

void hashFree(Node** table) {
    for (int i = 0; i < HASH_SIZE; i++) { Node* n = table[i]; while (n) { Node* t = n; n = n->next; free(t); } table[i] = NULL; }
}

int findMaximumXOR(int* nums, int numsSize) {
    int max = 0, mask = 0;
    Node** table = (Node**)calloc(HASH_SIZE, sizeof(Node*));
    for (int i = 31; i >= 0; i--) {
        mask |= (1 << i);
        hashFree(table);
        for (int j = 0; j < numsSize; j++) hashInsert(table, nums[j] & mask);
        int candidate = max | (1 << i);
        for (int j = 0; j < numsSize; j++) {
            if (hashContains(table, (nums[j] & mask) ^ candidate)) { max = candidate; break; }
        }
    }
    free(table);
    return max;
}
