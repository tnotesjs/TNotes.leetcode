// LeetCode C 提供的 Employee 结构不同，这里提供标准实现
int getImportanceHelper(int** graph, int* importance, int* subCount, int id, int n) {
    int total = importance[id];
    for (int i = 0; i < subCount[id]; i++)
        total += getImportanceHelper(graph, importance, subCount, graph[id][i], n);
    return total;
}
