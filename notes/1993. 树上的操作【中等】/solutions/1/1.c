#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

typedef struct {
  int* parent;
  int** children;
  int* childCnt;
  int* locked;
  int n;
} LockingTree;

LockingTree* lockingTreeCreate(int* parent, int parentSize) {
  LockingTree* obj = (LockingTree*)malloc(sizeof(LockingTree));
  obj->n = parentSize;
  obj->parent = (int*)malloc(parentSize * sizeof(int));
  memcpy(obj->parent, parent, parentSize * sizeof(int));
  obj->children = (int**)malloc(parentSize * sizeof(int*));
  obj->childCnt = (int*)calloc(parentSize, sizeof(int));
  int* cnt = (int*)calloc(parentSize, sizeof(int));
  for (int i = 1; i < parentSize; i++) cnt[parent[i]]++;
  for (int i = 0; i < parentSize; i++) obj->children[i] = (int*)malloc((cnt[i]+1)*sizeof(int));
  memset(cnt, 0, parentSize * sizeof(int));
  for (int i = 1; i < parentSize; i++) {
    int p = parent[i];
    obj->children[p][cnt[p]++] = i;
  }
  memcpy(obj->childCnt, cnt, parentSize * sizeof(int));
  free(cnt);
  obj->locked = (int*)malloc(parentSize * sizeof(int));
  for (int i = 0; i < parentSize; i++) obj->locked[i] = -1;
  return obj;
}

bool lockingTreeLock(LockingTree* obj, int num, int user) {
  if (obj->locked[num] != -1) return false;
  obj->locked[num] = user;
  return true;
}

bool lockingTreeUnlock(LockingTree* obj, int num, int user) {
  if (obj->locked[num] != user) return false;
  obj->locked[num] = -1;
  return true;
}

static bool unlockDesc(LockingTree* obj, int node) {
  bool found = false;
  if (obj->locked[node] != -1) { obj->locked[node] = -1; found = true; }
  for (int i = 0; i < obj->childCnt[node]; i++)
    if (unlockDesc(obj, obj->children[node][i])) found = true;
  return found;
}

bool lockingTreeUpgrade(LockingTree* obj, int num, int user) {
  if (obj->locked[num] != -1) return false;
  int p = obj->parent[num];
  while (p != -1) { if (obj->locked[p] != -1) return false; p = obj->parent[p]; }
  if (!unlockDesc(obj, num)) return false;
  obj->locked[num] = user;
  return true;
}

void lockingTreeFree(LockingTree* obj) {
  for (int i = 0; i < obj->n; i++) free(obj->children[i]);
  free(obj->children); free(obj->childCnt); free(obj->parent); free(obj->locked); free(obj);
}
