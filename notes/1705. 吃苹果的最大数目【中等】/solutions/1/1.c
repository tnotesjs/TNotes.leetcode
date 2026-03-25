#include <stdlib.h>

typedef struct { int expire; int count; } Apple;

static Apple hbuf[20001];
static int hsz;

void hpush(int e, int c) {
    hbuf[hsz] = (Apple){e, c};
    int i = hsz++;
    while (i > 0) {
        int p = (i-1)/2;
        if (hbuf[p].expire <= hbuf[i].expire) break;
        Apple t = hbuf[p]; hbuf[p] = hbuf[i]; hbuf[i] = t;
        i = p;
    }
}

Apple hpop() {
    Apple top = hbuf[0];
    hbuf[0] = hbuf[--hsz];
    int i = 0;
    while (1) {
        int s = i, l = 2*i+1, r = 2*i+2;
        if (l < hsz && hbuf[l].expire < hbuf[s].expire) s = l;
        if (r < hsz && hbuf[r].expire < hbuf[s].expire) s = r;
        if (s == i) break;
        Apple t = hbuf[s]; hbuf[s] = hbuf[i]; hbuf[i] = t;
        i = s;
    }
    return top;
}

int eatenApples(int* apples, int applesSize, int* days, int daysSize) {
    hsz = 0;
    int n = applesSize, res = 0;
    for (int i = 0; i < n || hsz > 0; i++) {
        if (i < n && apples[i] > 0)
            hpush(i + days[i], apples[i]);
        while (hsz > 0 && hbuf[0].expire <= i) hpop();
        if (hsz > 0) {
            hbuf[0].count--;
            res++;
            if (hbuf[0].count == 0) hpop();
        }
    }
    return res;
}
