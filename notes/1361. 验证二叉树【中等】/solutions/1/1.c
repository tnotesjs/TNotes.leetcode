bool validateBinaryTreeNodes(int n, int* leftChild, int leftChildSize, int* rightChild, int rightChildSize) {
    int* inDeg = calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) {
        if (leftChild[i] != -1) inDeg[leftChild[i]]++;
        if (rightChild[i] != -1) inDeg[rightChild[i]]++;
    }
    int root = -1;
    for (int i = 0; i < n; i++) {
        if (inDeg[i] == 0) {
            if (root != -1) { free(inDeg); return false; }
            root = i;
        } else if (inDeg[i] > 1) { free(inDeg); return false; }
    }
    free(inDeg);
    if (root == -1) return false;
    bool* visited = calloc(n, sizeof(bool));
    int* queue = malloc(sizeof(int) * n);
    int front = 0, back = 0;
    queue[back++] = root;
    visited[root] = true;
    int count = 0;
    while (front < back) {
        int node = queue[front++];
        count++;
        int children[2] = {leftChild[node], rightChild[node]};
        for (int i = 0; i < 2; i++) {
            if (children[i] != -1) {
                if (visited[children[i]]) { free(visited); free(queue); return false; }
                visited[children[i]] = true;
                queue[back++] = children[i];
            }
        }
    }
    free(visited); free(queue);
    return count == n;
}
