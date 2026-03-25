#include <stdlib.h>
#include <string.h>
#include <limits.h>

#define MOD1976 1000000007

typedef struct { int to; long long w; int next; } Edge1976;

int countPaths(int n, int** roads, int roadsSize, int* roadsColSize) {
  int cap = roadsSize * 2;
  Edge1976* edges = (Edge1976*)malloc(cap * sizeof(Edge1976));
  int* head = (int*)malloc(n * sizeof(int));
  memset(head, -1, n * sizeof(int));
  int eCnt = 0;
  for (int i = 0; i < roadsSize; i++) {
    int u = roads[i][0], v = roads[i][1]; long long w = roads[i][2];
    edges[eCnt] = (Edge1976){v, w, head[u]}; head[u] = eCnt++;
    edges[eCnt] = (Edge1976){u, w, head[v]}; head[v] = eCnt++;
  }
  long long* dist = (long long*)malloc(n * sizeof(long long));
  long long* ways = (long long*)calloc(n, sizeof(long long));
  for (int i = 0; i < n; i++) dist[i] = LLONG_MAX;
  dist[0] = 0; ways[0] = 1;
  // simple priority queue
  typedef struct { long long d; int u; } PQ;
  PQ* pq = (PQ*)malloc((cap+n) * sizeof(PQ));
  int pqSize = 0;
  #define PQPUSH(dd,uu) { pq[pqSize]=(PQ){dd,uu}; int i_=pqSize++; while(i_>0){int p_=(i_-1)/2;if(pq[p_].d>pq[i_].d){PQ t_=pq[p_];pq[p_]=pq[i_];pq[i_]=t_;i_=p_;}else break;}}
  #define PQPOP() ({ PQ r_=pq[0];pq[0]=pq[--pqSize];int i_=0;while(1){int s_=i_,l_=2*i_+1,r2_=2*i_+2;if(l_<pqSize&&pq[l_].d<pq[s_].d)s_=l_;if(r2_<pqSize&&pq[r2_].d<pq[s_].d)s_=r2_;if(s_!=i_){PQ t_=pq[s_];pq[s_]=pq[i_];pq[i_]=t_;i_=s_;}else break;} r_; })
  PQPUSH(0, 0);
  while (pqSize > 0) {
    PQ cur = PQPOP();
    if (cur.d > dist[cur.u]) continue;
    for (int e = head[cur.u]; e != -1; e = edges[e].next) {
      int v = edges[e].to; long long nd = cur.d + edges[e].w;
      if (nd < dist[v]) { dist[v] = nd; ways[v] = ways[cur.u]; PQPUSH(nd, v); }
      else if (nd == dist[v]) ways[v] = (ways[v] + ways[cur.u]) % MOD1976;
    }
  }
  int ans = (int)(ways[n-1] % MOD1976);
  free(edges);free(head);free(dist);free(ways);free(pq);
  return ans;
}
