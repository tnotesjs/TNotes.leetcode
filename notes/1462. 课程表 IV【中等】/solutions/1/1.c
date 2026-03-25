bool* checkIfPrerequisite(int numCourses, int** prerequisites, int prerequisitesSize,
                          int* prerequisitesColSize, int** queries, int queriesSize,
                          int* queriesColSize, int* returnSize) {
    int n = numCourses;
    int* reach = (int*)calloc(n * n, sizeof(int));
    for (int i = 0; i < prerequisitesSize; i++)
        reach[prerequisites[i][0] * n + prerequisites[i][1]] = 1;
    for (int k = 0; k < n; k++)
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                if (reach[i * n + k] && reach[k * n + j])
                    reach[i * n + j] = 1;
    bool* res = (bool*)malloc(queriesSize * sizeof(bool));
    for (int i = 0; i < queriesSize; i++)
        res[i] = reach[queries[i][0] * n + queries[i][1]];
    *returnSize = queriesSize;
    free(reach);
    return res;
}
