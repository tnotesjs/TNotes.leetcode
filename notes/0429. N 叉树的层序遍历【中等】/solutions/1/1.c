int** levelOrder(struct Node* root, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    if (!root) { *returnColumnSizes = NULL; return NULL; }
    int** res = (int**)malloc(sizeof(int*) * 1000);
    *returnColumnSizes = (int*)malloc(sizeof(int) * 1000);
    struct Node* queue[10000];
    int front = 0, rear = 0;
    queue[rear++] = root;
    while (front < rear) {
        int size = rear - front;
        res[*returnSize] = (int*)malloc(sizeof(int) * size);
        (*returnColumnSizes)[*returnSize] = size;
        for (int i = 0; i < size; i++) {
            struct Node* node = queue[front++];
            res[*returnSize][i] = node->val;
            for (int j = 0; j < node->numChildren; j++)
                queue[rear++] = node->children[j];
        }
        (*returnSize)++;
    }
    return res;
}
