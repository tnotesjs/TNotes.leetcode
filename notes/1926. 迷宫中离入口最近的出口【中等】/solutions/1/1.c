#include <stdlib.h>

int nearestExit(char** maze, int mazeSize, int* mazeColSize, int* entrance, int entranceSize) {
  int m = mazeSize, n = mazeColSize[0];
  int* qr = (int*)malloc(m*n*sizeof(int));
  int* qc = (int*)malloc(m*n*sizeof(int));
  int* qd = (int*)malloc(m*n*sizeof(int));
  int front = 0, back = 0;
  qr[back]=entrance[0]; qc[back]=entrance[1]; qd[back]=0; back++;
  maze[entrance[0]][entrance[1]] = '+';
  int dx[]={1,-1,0,0}, dy[]={0,0,1,-1};
  while (front < back) {
    int r=qr[front],c=qc[front],d=qd[front]; front++;
    for (int k = 0; k < 4; k++) {
      int nr = r+dx[k], nc = c+dy[k];
      if (nr>=0&&nr<m&&nc>=0&&nc<n&&maze[nr][nc]=='.') {
        if (nr==0||nr==m-1||nc==0||nc==n-1) { free(qr);free(qc);free(qd); return d+1; }
        maze[nr][nc] = '+';
        qr[back]=nr; qc[back]=nc; qd[back]=d+1; back++;
      }
    }
  }
  free(qr);free(qc);free(qd);
  return -1;
}
