#include <stdlib.h>

static int cmp1942(const void* a, const void* b) {
  return *(int*)a - *(int*)b;
}

int smallestChair(int** times, int timesSize, int* timesColSize, int targetFriend) {
  int n = timesSize;
  int* order = (int*)malloc(n * sizeof(int));
  int** ts = times;
  // sort by arrival
  int* arrivals = (int*)malloc(n * 2 * sizeof(int));
  for (int i = 0; i < n; i++) { arrivals[2*i] = times[i][0]; arrivals[2*i+1] = i; }
  // simple sort
  for (int i = 0; i < n; i++) order[i] = i;
  for (int i = 0; i < n-1; i++)
    for (int j = i+1; j < n; j++)
      if (times[order[i]][0] > times[order[j]][0]) { int t=order[i]; order[i]=order[j]; order[j]=t; }

  // available chairs min-heap
  int* avail = (int*)malloc((n+1)*sizeof(int)); int aSize=0;
  // leaving min-heap: [leaveTime, chair]
  int* lt = (int*)malloc((n+1)*sizeof(int));
  int* lc = (int*)malloc((n+1)*sizeof(int)); int lSize=0;
  int nextChair = 0;

  #define SWAP(a,b) {int t_=a;a=b;b=t_;}
  #define APUSH(v) { avail[aSize]=(v); int i_=aSize++; while(i_>0){int p_=(i_-1)/2; if(avail[p_]>avail[i_]){SWAP(avail[p_],avail[i_]);i_=p_;}else break;}}
  #define APOP() ({ int v_=avail[0]; avail[0]=avail[--aSize]; int i_=0; while(1){int s_=i_,l_=2*i_+1,r_=2*i_+2; if(l_<aSize&&avail[l_]<avail[s_])s_=l_; if(r_<aSize&&avail[r_]<avail[s_])s_=r_; if(s_!=i_){SWAP(avail[s_],avail[i_]);i_=s_;}else break;} v_; })
  #define LPUSH(t,c) { lt[lSize]=(t);lc[lSize]=(c); int i_=lSize++; while(i_>0){int p_=(i_-1)/2; if(lt[p_]>lt[i_]){SWAP(lt[p_],lt[i_]);SWAP(lc[p_],lc[i_]);i_=p_;}else break;}}
  #define LPOP_T() lt[0]
  #define LPOP_C() lc[0]
  #define LREM() { lt[0]=lt[--lSize];lc[0]=lc[lSize]; int i_=0; while(1){int s_=i_,l_=2*i_+1,r_=2*i_+2; if(l_<lSize&&lt[l_]<lt[s_])s_=l_; if(r_<lSize&&lt[r_]<lt[s_])s_=r_; if(s_!=i_){SWAP(lt[s_],lt[i_]);SWAP(lc[s_],lc[i_]);i_=s_;}else break;}}

  for (int k = 0; k < n; k++) {
    int idx = order[k];
    int arrive = times[idx][0], leave = times[idx][1];
    while (lSize > 0 && LPOP_T() <= arrive) { int c_ = LPOP_C(); LREM(); APUSH(c_); }
    int chair;
    if (aSize > 0) chair = APOP();
    else chair = nextChair++;
    if (idx == targetFriend) { free(order);free(arrivals);free(avail);free(lt);free(lc); return chair; }
    LPUSH(leave, chair);
  }
  free(order);free(arrivals);free(avail);free(lt);free(lc);
  return -1;
}
