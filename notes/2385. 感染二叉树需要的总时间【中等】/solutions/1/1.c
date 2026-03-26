int amountOfTime(struct TreeNode* root, int start) {
    int cap = 100001;
    int* eu = (int*)malloc(cap * sizeof(int));
    int* ev = (int*)malloc(cap * sizeof(int));
    int ec = 0;
    struct TreeNode** stk = (struct TreeNode**)malloc(cap * sizeof(struct TreeNode*));
    int top = 0;
    stk[top++] = root;
    while (top > 0) {
        struct TreeNode* node = stk[--top];
        if (node->left) {
            eu[ec] = node->val; ev[ec] = node->left->val; ec++;
            stk[top++] = node->left;
        }
        if (node->right) {
            eu[ec] = node->val; ev[ec] = node->right->val; ec++;
            stk[top++] = node->right;
        }
    }
    free(stk);
    int* head = (int*)malloc(cap * sizeof(int));
    memset(head, -1, cap * sizeof(int));
    int* to = (int*)malloc(ec * 2 * sizeof(int));
    int* nxt = (int*)malloc(ec * 2 * sizeof(int));
    int idx = 0;
    for (int i = 0; i < ec; i++) {
        to[idx] = ev[i]; nxt[idx] = head[eu[i]]; head[eu[i]] = idx++;
        to[idx] = eu[i]; nxt[idx] = head[ev[i]]; head[ev[i]] = idx++;
    }
    free(eu); free(ev);
    int* queue = (int*)malloc(cap * sizeof(int));
    char* visited = (char*)calloc(cap, 1);
    int front = 0, back = 0;
    queue[back++] = start;
    visited[start] = 1;
    int time = -1;
    while (front < back) {
        int size = back - front;
        for (int i = 0; i < size; i++) {
            int node = queue[front++];
            for (int e = head[node]; e != -1; e = nxt[e]) {
                if (!visited[to[e]]) {
                    visited[to[e]] = 1;
                    queue[back++] = to[e];
                }
            }
        }
        time++;
    }
    free(head); free(to); free(nxt); free(queue); free(visited);
    return time;
}
