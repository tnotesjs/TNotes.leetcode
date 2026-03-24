int openLock(char** deadends, int deadendsSize, char* target) {
    int dead[10000];
    memset(dead, 0, sizeof(dead));
    for (int i = 0; i < deadendsSize; i++) {
        dead[atoi(deadends[i])] = 1;
    }
    if (dead[0]) return -1;
    int t = atoi(target);
    int visited[10000];
    memset(visited, 0, sizeof(visited));
    visited[0] = 1;
    int queue[10000], head = 0, tail = 0;
    queue[tail++] = 0;
    int step = 0;
    while (head < tail) {
        int size = tail - head;
        for (int i = 0; i < size; i++) {
            int cur = queue[head++];
            if (cur == t) return step;
            int digits[4] = {cur/1000, cur/100%10, cur/10%10, cur%10};
            for (int j = 0; j < 4; j++) {
                for (int d = -1; d <= 1; d += 2) {
                    int old = digits[j];
                    digits[j] = (old + d + 10) % 10;
                    int next = digits[0]*1000 + digits[1]*100 + digits[2]*10 + digits[3];
                    if (!visited[next] && !dead[next]) {
                        visited[next] = 1;
                        queue[tail++] = next;
                    }
                    digits[j] = old;
                }
            }
        }
        step++;
    }
    return -1;
}
