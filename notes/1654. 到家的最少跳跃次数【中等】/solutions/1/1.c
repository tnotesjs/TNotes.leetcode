#include <stdlib.h>
#include <string.h>

int minimumJumps(int* forbidden, int forbiddenSize, int a, int b, int x) {
    int limit = 6000;
    int* ban = (int*)calloc(limit + 1, sizeof(int));
    for (int i = 0; i < forbiddenSize; i++)
        if (forbidden[i] <= limit) ban[forbidden[i]] = 1;
    // visited[pos][0/1]
    int (*vis)[2] = (int(*)[2])calloc(limit + 1, sizeof(int[2]));
    int (*queue)[3] = (int(*)[3])malloc((limit + 1) * 4 * sizeof(int[3]));
    int front = 0, rear = 0;
    queue[rear][0] = 0; queue[rear][1] = 0; queue[rear][2] = 0; rear++;
    vis[0][0] = 1;
    while (front < rear) {
        int pos = queue[front][0], steps = queue[front][1], lb = queue[front][2];
        front++;
        if (pos == x) { free(ban); free(vis); free(queue); return steps; }
        int fwd = pos + a;
        if (fwd <= limit && !ban[fwd] && !vis[fwd][0]) {
            vis[fwd][0] = 1;
            queue[rear][0] = fwd; queue[rear][1] = steps+1; queue[rear][2] = 0; rear++;
        }
        if (!lb) {
            int bwd = pos - b;
            if (bwd >= 0 && !ban[bwd] && !vis[bwd][1]) {
                vis[bwd][1] = 1;
                queue[rear][0] = bwd; queue[rear][1] = steps+1; queue[rear][2] = 1; rear++;
            }
        }
    }
    free(ban); free(vis); free(queue);
    return -1;
}
