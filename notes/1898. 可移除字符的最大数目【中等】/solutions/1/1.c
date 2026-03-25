#include <stdbool.h>
#include <string.h>
#include <stdlib.h>

static bool check1898(char* s, int sLen, char* p, int pLen, int* removable, int k) {
  char* used = (char*)calloc(sLen, 1);
  for (int i = 0; i < k; i++) used[removable[i]] = 1;
  int j = 0;
  for (int i = 0; i < sLen && j < pLen; i++) {
    if (!used[i] && s[i] == p[j]) j++;
  }
  free(used);
  return j == pLen;
}

int maximumRemovals(char* s, char* p, int* removable, int removableSize) {
  int sLen = strlen(s), pLen = strlen(p);
  int lo = 0, hi = removableSize;
  while (lo < hi) {
    int mid = lo + (hi - lo + 1) / 2;
    if (check1898(s, sLen, p, pLen, removable, mid)) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}
