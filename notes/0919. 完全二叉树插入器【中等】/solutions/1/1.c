typedef struct {
    struct TreeNode* root;
    struct TreeNode** queue;
    int front;
    int rear;
} CBTInserter;

CBTInserter* cBTInserterCreate(struct TreeNode* root) {
    CBTInserter* obj = malloc(sizeof(CBTInserter));
    obj->root = root;
    obj->queue = malloc(2048 * sizeof(struct TreeNode*));
    obj->front = 0;
    obj->rear = 0;

    // BFS 初始化
    struct TreeNode** bfs = malloc(2048 * sizeof(struct TreeNode*));
    int head = 0, tail = 0;
    bfs[tail++] = root;
    while (head < tail) {
        struct TreeNode* node = bfs[head++];
        if (node->left) bfs[tail++] = node->left;
        if (node->right) bfs[tail++] = node->right;
        if (!node->left || !node->right) {
            obj->queue[obj->rear++] = node;
        }
    }
    free(bfs);
    return obj;
}

int cBTInserterInsert(CBTInserter* obj, int val) {
    struct TreeNode* newNode = malloc(sizeof(struct TreeNode));
    newNode->val = val;
    newNode->left = NULL;
    newNode->right = NULL;

    struct TreeNode* parent = obj->queue[obj->front];
    if (!parent->left) {
        parent->left = newNode;
    } else {
        parent->right = newNode;
        obj->front++;
    }
    obj->queue[obj->rear++] = newNode;
    return parent->val;
}

struct TreeNode* cBTInserterGet_root(CBTInserter* obj) {
    return obj->root;
}

void cBTInserterFree(CBTInserter* obj) {
    free(obj->queue);
    free(obj);
}
