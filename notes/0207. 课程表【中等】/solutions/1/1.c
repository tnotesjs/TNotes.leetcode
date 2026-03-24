bool canFinish(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize) {
    int* inDegree = (int*)calloc(numCourses, sizeof(int));
    int** graph = (int**)malloc(sizeof(int*) * numCourses);
    int* graphSize = (int*)calloc(numCourses, sizeof(int));
    int* graphCap = (int*)malloc(sizeof(int) * numCourses);
    for (int i = 0; i < numCourses; i++) {
        graphCap[i] = 4;
        graph[i] = (int*)malloc(sizeof(int) * 4);
    }
    for (int i = 0; i < prerequisitesSize; i++) {
        int a = prerequisites[i][0], b = prerequisites[i][1];
        if (graphSize[b] == graphCap[b]) {
            graphCap[b] *= 2;
            graph[b] = realloc(graph[b], sizeof(int) * graphCap[b]);
        }
        graph[b][graphSize[b]++] = a;
        inDegree[a]++;
    }
    int* queue = (int*)malloc(sizeof(int) * numCourses);
    int front = 0, rear = 0;
    for (int i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0) queue[rear++] = i;
    }
    int count = 0;
    while (front < rear) {
        int cur = queue[front++];
        count++;
        for (int i = 0; i < graphSize[cur]; i++) {
            int next = graph[cur][i];
            if (--inDegree[next] == 0) queue[rear++] = next;
        }
    }
    for (int i = 0; i < numCourses; i++) free(graph[i]);
    free(graph); free(graphSize); free(graphCap); free(inDegree); free(queue);
    return count == numCourses;
}
