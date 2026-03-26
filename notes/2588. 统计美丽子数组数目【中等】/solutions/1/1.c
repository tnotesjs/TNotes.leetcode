#define BSIZE 262144
#define BMASK (BSIZE - 1)

typedef struct BNode { int key; int val; struct BNode* next; } BNode;

long long beautifulSubarrays(int* nums, int numsSize) {
    BNode** tbl = (BNode**)calloc(BSIZE, sizeof(BNode*));
    // insert (0, 1)
    BNode* init = (BNode*)malloc(sizeof(BNode));
    init->key = 0; init->val = 1; init->next = NULL;
    tbl[0] = init;

    int xv = 0;
    long long count = 0;
    for (int i = 0; i < numsSize; i++) {
        xv ^= nums[i];
        unsigned h = ((unsigned)xv * 2654435761u) & BMASK;
        int found = 0;
        for (BNode* n = tbl[h]; n; n = n->next) {
            if (n->key == xv) { count += n->val; n->val++; found = 1; break; }
        }
        if (!found) {
            BNode* n = (BNode*)malloc(sizeof(BNode));
            n->key = xv; n->val = 1; n->next = tbl[h]; tbl[h] = n;
        }
    }
    for (int i = 0; i < BSIZE; i++) {
        BNode* n = tbl[i];
        while (n) { BNode* t = n->next; free(n); n = t; }
    }
    free(tbl);
    return count;
}
