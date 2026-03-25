int* childList[100001];
int childCount[100001];
int* informTimeArr;

int dfs(int node) {
    int maxTime = 0;
    for (int i = 0; i < childCount[node]; i++) {
        int t = dfs(childList[node][i]);
        if (t > maxTime) maxTime = t;
    }
    return informTimeArr[node] + maxTime;
}

int numOfMinutes(int n, int headID, int* manager, int managerSize, int* informTime, int informTimeSize) {
    informTimeArr = informTime;
    for (int i = 0; i < n; i++) {
        childList[i] = malloc(sizeof(int) * 16);
        childCount[i] = 0;
    }
    for (int i = 0; i < n; i++) {
        if (manager[i] != -1) {
            childList[manager[i]][childCount[manager[i]]++] = i;
        }
    }
    int result = dfs(headID);
    for (int i = 0; i < n; i++) free(childList[i]);
    return result;
}
