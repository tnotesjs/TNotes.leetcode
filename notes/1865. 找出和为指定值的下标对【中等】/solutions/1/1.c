#include <stdlib.h>
#include <string.h>

#define HT_SIZE_1865 100003

typedef struct HNode1865 { int key; int val; struct HNode1865* next; } HNode1865;

typedef struct {
  int* nums1;
  int nums1Size;
  int* nums2;
  int nums2Size;
  HNode1865* ht[HT_SIZE_1865];
} FindSumPairs;

static unsigned hash1865(int key) {
  return (unsigned)(key * 2654435761u) % HT_SIZE_1865;
}

static void htAdd1865(HNode1865** ht, int key, int delta) {
  unsigned h = hash1865(key);
  for (HNode1865* n = ht[h]; n; n = n->next) {
    if (n->key == key) { n->val += delta; return; }
  }
  HNode1865* n = (HNode1865*)malloc(sizeof(HNode1865));
  n->key = key; n->val = delta; n->next = ht[h]; ht[h] = n;
}

static int htGet1865(HNode1865** ht, int key) {
  unsigned h = hash1865(key);
  for (HNode1865* n = ht[h]; n; n = n->next)
    if (n->key == key) return n->val;
  return 0;
}

FindSumPairs* findSumPairsCreate(int* nums1, int nums1Size, int* nums2, int nums2Size) {
  FindSumPairs* obj = (FindSumPairs*)calloc(1, sizeof(FindSumPairs));
  obj->nums1 = nums1; obj->nums1Size = nums1Size;
  obj->nums2 = (int*)malloc(nums2Size * sizeof(int));
  memcpy(obj->nums2, nums2, nums2Size * sizeof(int));
  obj->nums2Size = nums2Size;
  for (int i = 0; i < nums2Size; i++) htAdd1865(obj->ht, nums2[i], 1);
  return obj;
}

void findSumPairsAdd(FindSumPairs* obj, int index, int val) {
  htAdd1865(obj->ht, obj->nums2[index], -1);
  obj->nums2[index] += val;
  htAdd1865(obj->ht, obj->nums2[index], 1);
}

int findSumPairsCount(FindSumPairs* obj, int tot) {
  int ans = 0;
  for (int i = 0; i < obj->nums1Size; i++)
    ans += htGet1865(obj->ht, tot - obj->nums1[i]);
  return ans;
}

void findSumPairsFree(FindSumPairs* obj) {
  for (int i = 0; i < HT_SIZE_1865; i++) {
    HNode1865* n = obj->ht[i];
    while (n) { HNode1865* t = n; n = n->next; free(t); }
  }
  free(obj->nums2);
  free(obj);
}
