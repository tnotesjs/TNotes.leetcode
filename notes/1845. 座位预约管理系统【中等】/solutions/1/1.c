#include <stdlib.h>

typedef struct {
  int* heap;
  int size;
} SeatManager;

static void sm_up(int* h, int i) {
  while (i > 0) {
    int p = (i - 1) / 2;
    if (h[p] > h[i]) { int t = h[p]; h[p] = h[i]; h[i] = t; i = p; }
    else break;
  }
}

static void sm_down(int* h, int n, int i) {
  while (1) {
    int m = i, l = 2*i+1, r = 2*i+2;
    if (l < n && h[l] < h[m]) m = l;
    if (r < n && h[r] < h[m]) m = r;
    if (m == i) break;
    int t = h[i]; h[i] = h[m]; h[m] = t; i = m;
  }
}

SeatManager* seatManagerCreate(int n) {
  SeatManager* obj = (SeatManager*)malloc(sizeof(SeatManager));
  obj->heap = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) obj->heap[i] = i + 1;
  obj->size = n;
  return obj;
}

int seatManagerReserve(SeatManager* obj) {
  int top = obj->heap[0];
  obj->heap[0] = obj->heap[--obj->size];
  sm_down(obj->heap, obj->size, 0);
  return top;
}

void seatManagerUnreserve(SeatManager* obj, int seatNumber) {
  obj->heap[obj->size] = seatNumber;
  sm_up(obj->heap, obj->size);
  obj->size++;
}

void seatManagerFree(SeatManager* obj) {
  free(obj->heap);
  free(obj);
}
