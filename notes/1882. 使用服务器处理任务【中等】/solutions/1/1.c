// 简化实现：双堆模拟
#include <stdlib.h>

typedef struct { int time; int weight; int idx; } BNode1882;
typedef struct { int weight; int idx; } FNode1882;

static void fUp(FNode1882* h, int i) { while(i>0){int p=(i-1)/2;if(h[p].weight>h[i].weight||(h[p].weight==h[i].weight&&h[p].idx>h[i].idx)){FNode1882 t=h[i];h[i]=h[p];h[p]=t;i=p;}else break;} }
static void fDown(FNode1882* h, int n, int i) { while(1){int m=i,l=2*i+1,r=2*i+2;if(l<n&&(h[l].weight<h[m].weight||(h[l].weight==h[m].weight&&h[l].idx<h[m].idx)))m=l;if(r<n&&(h[r].weight<h[m].weight||(h[r].weight==h[m].weight&&h[r].idx<h[m].idx)))m=r;if(m==i)break;FNode1882 t=h[i];h[i]=h[m];h[m]=t;i=m;} }
static void bUp(BNode1882* h, int i) { while(i>0){int p=(i-1)/2;if(h[p].time>h[i].time||(h[p].time==h[i].time&&(h[p].weight>h[i].weight||(h[p].weight==h[i].weight&&h[p].idx>h[i].idx)))){BNode1882 t=h[i];h[i]=h[p];h[p]=t;i=p;}else break;} }
static void bDown(BNode1882* h, int n, int i) { while(1){int m=i,l=2*i+1,r=2*i+2;if(l<n&&(h[l].time<h[m].time||(h[l].time==h[m].time&&(h[l].weight<h[m].weight||(h[l].weight==h[m].weight&&h[l].idx<h[m].idx)))))m=l;if(r<n&&(h[r].time<h[m].time||(h[r].time==h[m].time&&(h[r].weight<h[m].weight||(h[r].weight==h[m].weight&&h[r].idx<h[m].idx)))))m=r;if(m==i)break;BNode1882 t=h[i];h[i]=h[m];h[m]=t;i=m;} }

int* assignTasks(int** servers, int serversSize, int* serversColSize, int** tasks, int tasksSize, int* tasksColSize, int* returnSize) {
  int n = serversSize, m = tasksSize;
  FNode1882* fh = (FNode1882*)malloc(n * sizeof(FNode1882));
  int fs = 0;
  BNode1882* bh = (BNode1882*)malloc(n * sizeof(BNode1882));
  int bs = 0;
  for (int i = 0; i < n; i++) { fh[fs]=(FNode1882){servers[i][0],i}; fUp(fh,fs); fs++; }
  int* ans = (int*)malloc(m * sizeof(int));
  for (int j = 0; j < m; j++) {
    int time = j;
    while (bs > 0 && bh[0].time <= time) { fh[fs]=(FNode1882){bh[0].weight,bh[0].idx}; fUp(fh,fs); fs++; bh[0]=bh[--bs]; if(bs)bDown(bh,bs,0); }
    if (fs > 0) {
      ans[j] = fh[0].idx;
      bh[bs]=(BNode1882){time+tasks[j][1],fh[0].weight,fh[0].idx}; bUp(bh,bs); bs++;
      fh[0]=fh[--fs]; if(fs)fDown(fh,fs,0);
    } else {
      int rt = bh[0].time;
      while (bs > 0 && bh[0].time <= rt) { fh[fs]=(FNode1882){bh[0].weight,bh[0].idx}; fUp(fh,fs); fs++; bh[0]=bh[--bs]; if(bs)bDown(bh,bs,0); }
      ans[j] = fh[0].idx;
      bh[bs]=(BNode1882){rt+tasks[j][1],fh[0].weight,fh[0].idx}; bUp(bh,bs); bs++;
      fh[0]=fh[--fs]; if(fs)fDown(fh,fs,0);
    }
  }
  free(fh); free(bh);
  *returnSize = m;
  return ans;
}
