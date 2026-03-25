#include <stdlib.h>
#include <string.h>

#define MOD1814 1000000007

static int rev1814(int n) {
  int r = 0;
  while (n > 0) { r = r * 10 + n % 10; n /= 10; }
  return r;
}

int countNicePairs(int* nums, int numsSize) {
  // 哈希表
  int cap = numsSize * 2;
  int* keys = (int*)malloc(cap * sizeof(int));
  int* vals = (int*)malloc(cap * sizeof(int));
  char* used = (char*)calloc(cap, 1);
  long long ans = 0;
  for (int i = 0; i < numsSize; i++) {
    int key = nums[i] - rev1814(nums[i]);
    unsigned h = (unsigned)(key * 2654435761u) % cap;
    while (used[h]) {
      if (keys[h] == key) break;
      h = (h + 1) % cap;
    }
    if (used[h]) {
      ans = (ans + vals[h]) % MOD1814;
      vals[h]++;
    } else {
      used[h] = 1;
      keys[h] = key;
      vals[h] = 1;
    }
  }
  free(keys); free(vals); free(used);
  return (int)ans;
}
