int count;
bool visited[16];

void dfs(int n, int pos) {
    if (pos > n) { count++; return; }
    for (int i = 1; i <= n; i++) {
        if (!visited[i] && (i % pos == 0 || pos % i == 0)) {
            visited[i] = true;
            dfs(n, pos + 1);
            visited[i] = false;
        }
    }
}

int countArrangement(int n) {
    count = 0;
    memset(visited, false, sizeof(visited));
    dfs(n, 1);
    return count;
}
