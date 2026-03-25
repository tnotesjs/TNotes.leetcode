#include <stdlib.h>

int minimumEffortPath(int** heights, int heightsSize, int* heightsColSize) {
    int m = heightsSize, n = heightsColSize[0];
    int** dist = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        dist[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) dist[i][j] = 0x7fffffff;
    }
    dist[0][0] = 0;
    // 简化优先队列
    int (*pq)[3] = (int(*)[3])malloc(m * n * 4 * sizeof(int[3]));
    int pqSize = 0;
    pq[pqSize][0] = 0; pq[pqSize][1] = 0; pq[pqSize][2] = 0; pqSize++;
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    while (pqSize > 0) {
        int mi = 0;
        for (int i = 1; i < pqSize; i++)
            if (pq[i][0] < pq[mi][0]) mi = i;
        int eff = pq[mi][0], r = pq[mi][1], c = pq[mi][2];
        pq[mi][0] = pq[pqSize-1][0]; pq[mi][1] = pq[pqSize-1][1]; pq[mi][2] = pq[pqSize-1][2];
        pqSize--;
        if (eff > dist[r][c]) continue;
        if (r == m-1 && c == n-1) { free(pq); for(int i=0;i<m;i++) free(dist[i]); free(dist); return eff; }
        for (int d = 0; d < 4; d++) {
            int nr = r+dirs[d][0], nc = c+dirs[d][1];
            if (nr<0||nr>=m||nc<0||nc>=n) continue;
            int ne = abs(heights[nr][nc]-heights[r][c]);
            if (ne < eff) ne = eff;
            if (ne < dist[nr][nc]) {
                dist[nr][nc] = ne;
                pq[pqSize][0]=ne; pq[pqSize][1]=nr; pq[pqSize][2]=nc; pqSize++;
            }
        }
    }
    free(pq); for(int i=0;i<m;i++) free(dist[i]); free(dist);
    return 0;
}
