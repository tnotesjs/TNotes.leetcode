int closestMeetingNode(int* edges, int edgesSize, int node1, int node2) {
    int n = edgesSize;
    int* dist1 = (int*)malloc(n * sizeof(int));
    int* dist2 = (int*)malloc(n * sizeof(int));
    memset(dist1, -1, n * sizeof(int));
    memset(dist2, -1, n * sizeof(int));
    int cur = node1, d = 0;
    while (cur != -1 && dist1[cur] == -1) {
        dist1[cur] = d++;
        cur = edges[cur];
    }
    cur = node2; d = 0;
    while (cur != -1 && dist2[cur] == -1) {
        dist2[cur] = d++;
        cur = edges[cur];
    }
    int minDist = INT_MAX, ans = -1;
    for (int i = 0; i < n; i++) {
        if (dist1[i] != -1 && dist2[i] != -1) {
            int maxD = dist1[i] > dist2[i] ? dist1[i] : dist2[i];
            if (maxD < minDist) {
                minDist = maxD;
                ans = i;
            }
        }
    }
    free(dist1);
    free(dist2);
    return ans;
}
