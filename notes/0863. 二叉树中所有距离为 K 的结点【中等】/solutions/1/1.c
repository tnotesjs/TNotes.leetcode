void buildGraph(struct TreeNode* node, struct TreeNode* parent, int graph[][3], int* graphSize) {
    if (!node) return;
    if (parent) {
        graph[node->val][graphSize[node->val]++] = parent->val;
        graph[parent->val][graphSize[parent->val]++] = node->val;
    }
    buildGraph(node->left, node, graph, graphSize);
    buildGraph(node->right, node, graph, graphSize);
}

int* distanceK(struct TreeNode* root, struct TreeNode* target, int k, int* returnSize) {
    int graph[501][3];
    int graphSize[501];
    memset(graphSize, 0, sizeof(graphSize));
    buildGraph(root, NULL, graph, graphSize);
    bool visited[501] = {false};
    int queue[501], front = 0, back = 0;
    queue[back++] = target->val;
    visited[target->val] = true;
    int dist = 0;
    while (front < back && dist < k) {
        int size = back - front;
        for (int i = 0; i < size; i++) {
            int u = queue[front++];
            for (int j = 0; j < graphSize[u]; j++) {
                int v = graph[u][j];
                if (!visited[v]) { visited[v] = true; queue[back++] = v; }
            }
        }
        dist++;
    }
    *returnSize = back - front;
    int* res = (int*)malloc(sizeof(int) * (*returnSize));
    for (int i = 0; i < *returnSize; i++) res[i] = queue[front + i];
    return res;
}
