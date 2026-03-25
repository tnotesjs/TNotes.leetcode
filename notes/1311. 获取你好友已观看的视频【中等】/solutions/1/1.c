int cmp(const void* a, const void* b) {
    const char** pa = *(const char***)a;
    const char** pb = *(const char***)b;
    int fa = atoi(pa[1]), fb = atoi(pb[1]);
    if (fa != fb) return fa - fb;
    return strcmp(pa[0], pb[0]);
}

// Note: C solution is complex for this problem due to string handling.
// Using a simplified approach with fixed-size hash table.
char** watchedVideosByFriends(char*** watchedVideos, int watchedVideosSize, int* watchedVideosColSize,
    int** friends, int friendsSize, int* friendsColSize, int id, int level, int* returnSize) {
    int n = watchedVideosSize;
    bool* visited = calloc(n, sizeof(bool));
    int* queue = malloc(sizeof(int) * n);
    int front = 0, back = 0;
    queue[back++] = id;
    visited[id] = true;
    for (int lv = 0; lv < level; lv++) {
        int newBack = 0;
        int* next = malloc(sizeof(int) * n);
        for (int i = front; i < back; i++) {
            int u = queue[i];
            for (int j = 0; j < friendsColSize[u]; j++) {
                int v = friends[u][j];
                if (!visited[v]) {
                    visited[v] = true;
                    next[newBack++] = v;
                }
            }
        }
        free(queue);
        queue = next;
        front = 0;
        back = newBack;
    }
    // Count video frequencies using simple array of pairs
    char** videos = malloc(sizeof(char*) * 10000);
    int* freqs = malloc(sizeof(int) * 10000);
    int cnt = 0;
    for (int i = front; i < back; i++) {
        int u = queue[i];
        for (int j = 0; j < watchedVideosColSize[u]; j++) {
            char* v = watchedVideos[u][j];
            int found = -1;
            for (int k = 0; k < cnt; k++) {
                if (strcmp(videos[k], v) == 0) { found = k; break; }
            }
            if (found >= 0) freqs[found]++;
            else { videos[cnt] = v; freqs[cnt] = 1; cnt++; }
        }
    }
    // Sort by freq then lexicographic
    int** pairs = malloc(sizeof(int*) * cnt);
    for (int i = 0; i < cnt; i++) {
        pairs[i] = malloc(sizeof(int) * 2);
        pairs[i][0] = i;
        pairs[i][1] = freqs[i];
    }
    // Simple bubble sort for small n
    for (int i = 0; i < cnt - 1; i++) {
        for (int j = i + 1; j < cnt; j++) {
            if (pairs[i][1] > pairs[j][1] ||
                (pairs[i][1] == pairs[j][1] && strcmp(videos[pairs[i][0]], videos[pairs[j][0]]) > 0)) {
                int* tmp = pairs[i]; pairs[i] = pairs[j]; pairs[j] = tmp;
            }
        }
    }
    char** res = malloc(sizeof(char*) * cnt);
    for (int i = 0; i < cnt; i++) res[i] = videos[pairs[i][0]];
    *returnSize = cnt;
    free(visited); free(queue); free(freqs);
    for (int i = 0; i < cnt; i++) free(pairs[i]);
    free(pairs);
    return res;
}
